
export default class RibbonService {
    constructor(data) {

        this.left_collection = [];
        this.right_collection = [];
        this.original_collection = [];

        this.getVisibleViewportTiles = (tiles = []) => {
            this.original_collection = tiles;
            let newTiles = [];
            const firstIndex = this.getfirstIndex(tiles);
            const maxViewpostTilesAmount = 7;
            const lastIndex = firstIndex + maxViewpostTilesAmount;

            tiles.forEach((tile, index) => {
                if (index < firstIndex) {
                    this.left_collection.push(tile)
                    return;
                }
                if (index > lastIndex) {
                    this.right_collection.push(tile)
                    return;
                }

                newTiles.push(tile);
            });

            return newTiles;
        }

        this.getfirstIndex = (tiles = []) => {
            return tiles.findIndex(tile => tile.isOnNow) || 0;
        }

        this.loadMore = () => {
            if (!this.right_collection.length) return;

            this.tiles = [...this.tiles, ...this.right_collection];
            this.right_collection = [];
        }

        this.loadPrevious = () => {
            if (!this.left_collection.length) return;
            this.tiles = [...this.tiles, ...this.left_collection];
            this.left_collection = [];
        }
    }
}


// module.exports = {

//     left_collection: [],

//     right_collection: [],

//     original_collection: [],

//     getVisibleViewportTiles: (tiles = []) => {
//         this.original_collection = tiles;
//         let newTiles = [];
//         const firstIndex = this.getfirstIndex(tiles);
//         const maxViewpostTilesAmount = 7;
//         const lastIndex = firstIndex + maxViewpostTilesAmount;

//         tiles.forEach((tile, index) => {
//             if (index < firstIndex) {
//                 this.left_collection.push(tile)
//                 return;
//             }
//             if (index > lastIndex) {
//                 this.right_collection.push(tile)
//                 return;
//             }

//             newTiles.push(tile);
//         });

//         return newTiles;
//     },

//     getfirstIndex: (tiles = []) => {
//         return tiles.findIndex(tile => tile.isOnNow) || 0;
//     },

//     loadMore: () => {
//         if (!this.right_collection.length) return;

//         this.tiles = [...this.tiles, ...this.right_collection];
//         this.right_collection = [];
//     },

//     loadPrevious: () => {
//         if (!this.left_collection.length) return;
//         this.tiles = [...this.tiles, ...this.left_collection];
//         this.left_collection = [];
//     }
// }