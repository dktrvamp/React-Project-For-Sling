/*

*/
import React from 'react';
import Tile from '../list/item/tile/tile.jsx';
import './style.scss';

export default class Ribbon extends React.Component {

    render() {
        const {tiles, title} = this.props.data || {};

        return <div id="Ribbon">
            <p className="ribbon-title">{title}</p>
            <section>
                {
                    tiles.map(item => (<Tile key={item.id} data={item}/>))
                }
            </section>
        </div>;
    }
}
