/*

*/
import React from 'react';
import Tile from '../list/item/tile/tile.jsx';
import './style.scss';

export default class Ribbon extends React.Component {

    render() {
        const data = this.props.data || [];
        return <div id="Ribbon">
            {
                data.map(item => (<Tile key={item.id} data={item}/>))
            }
        </div>;
    }
}
