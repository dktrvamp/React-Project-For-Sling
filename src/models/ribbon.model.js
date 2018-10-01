import BaseModel from './base.model';

export default class Ribbon extends BaseModel {
    constructor(data) {
        super(data);

        this.left_collection = [];
        this.right_collection = [];
        this.tiles = this.visibleViewportTiles(this.tiles);
    }

    visibleViewportTiles(tiles = []) {
        let newTiles = [];
        const firstIndex = this.getStartIndex(tiles);
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

    getStartIndex(tiles = []) {
        return tiles.findIndex(tile => tile.isOnNow) || 0;
    }

    loadMore() {
        this.tiles = [...this.tiles, ...this.right_collection];
    }

    loadPrevious() {
        this.tiles = [...this.tiles, ...this.left_collection];
    }
}