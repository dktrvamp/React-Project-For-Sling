/*

*/
import React from 'react';
import './style.scss';

export default class Metadata extends React.Component {

    render() {
        const data = this.props.data || [];
        const {release_year, genre = [], episode_title, title} = data.metadata || data;
        return (<div id="Metadata">
                <span className="title">{episode_title || title}</span>
                <div className="sub-content">
                    {data.isOnNow && <span className="on-now">{'On Now'}</span>}
                    <span className="year">{release_year}</span>
                    <span className="genre">{genre.join(', ')}</span>
                </div>
        </div>);
    }
}
