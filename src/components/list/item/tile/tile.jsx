/*

*/
import React from 'react';
import Thumbnail from '../../../shared/thumbnail/thumbnail.jsx';
import Metadata from '../metadata/metadata.jsx';
import TileConstants from '../../../../constants/tile.constants.js';
import {getScaledImage} from '../../../../utils/image.utils.js';

import './style.scss';
export default class Tile extends React.Component {

    render() {
        const item = this.props.data || [];
        const {w, h, url} = item.thumbnail;
        const thumbnail = getScaledImage(url, w, h, TileConstants);
        const width = thumbnail.width;

        return (
            <div id="Tile" key={item.id} style={{width}}>
                <Thumbnail data={thumbnail}/>
                <Metadata data={item.metadata}/>
            </div>
        );
    }
}
