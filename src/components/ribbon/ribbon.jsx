/*

*/
import React from 'react';
import Tile from '../list/item/tile/tile.jsx';
import './style.scss';
import RibbonModel from '../../models/ribbon.model';

export default class Ribbon extends React.Component {
    constructor(props) {
        super(props);
        this.state = new RibbonModel(this.props.data || {});
    }

    componentDidMount() {}

    componentWillUnmount() {}

    handleScroll() {
        if (!this.state.loadMore) return;

        this.state.loadMore();
        this.setState({
            state: this.state
        });
    }

    render() {
        const {tiles, title} = this.state;

        return <div id="Ribbon">
            <p className="ribbon-title">{title}</p>
            <div className="horizontal-scroll-container"
                onScroll={this.handleScroll.bind(this)}>
                {
                    tiles.map(item => (<Tile key={item.id} data={item}/>))
                }
            </div>
        </div>;
    }
}
