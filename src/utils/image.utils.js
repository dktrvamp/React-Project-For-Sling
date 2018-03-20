    /**
     * Scales the image ratio
     *
     * @function core.csl.image-helper.CoreImageHelperService#getScaledImage
     * @param options {Object} Options for resizing
     * @returns {Object} {url, width, height}
     */
    export function getScaledImage(
        url,
        w,
        h,
        {HEIGHT, MAX_WIDTH, MIN_WIDTH}
    ) {

        let scaledWidth = MIN_WIDTH;
        let scaledHeight = HEIGHT;

        if (w && h) {
            scaledWidth = Math.floor(w / h * scaledHeight);

            if (scaledWidth > MAX_WIDTH) {
                scaledWidth = MAX_WIDTH;
                scaledHeight = Math.floor(h / w * scaledWidth);
            }
        }

        if (url) {
            url = getResizedImageUrl(
                url,
                {
                    height: HEIGHT
                }
            );
        }

        return {
            url,
            width: scaledWidth,
            height: scaledHeight
        };
    }

    export function getResizedImageUrl(url, options) {
        const cmsRegex = /^(http.+\/cms\/images)\/(?:[a-z]{1}\/(?:x|[0-9]+)\/(?:x|[0-9]+)\/)?([0-9a-z]+\.[a-z]+)$/i;
        if (!url || typeof (url) !== "string") {
            return;
        }
        options = options || {};
        var w = options.width == null ? null : parseInt(options.width.toString(), 10);
        var h = options.height == null ? null : parseInt(options.height.toString(), 10);
        if (!(w || h)) {
            return url;
        }
        var commonResizeModifier = (w && h ? ("/m/" + w + "/" + h) : ("/s/" + (w || "x") + "/" + (h || "x"))) + "/";
        var constructUrl = function (matches, resizeModifier) {
            if (resizeModifier === void 0) { resizeModifier = commonResizeModifier; }
            return matches ? "" + matches[1] + resizeModifier + matches[2] : undefined;
        };
        var getCmsUrl = function () { return constructUrl(cmsRegex.exec(url)); };
        return getCmsUrl();
    }

