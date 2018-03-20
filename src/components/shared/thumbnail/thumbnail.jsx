/*
    ./client/components/App.jsx
*/
import React from 'react';
import './style.scss'
export default class Thumbnail extends React.Component {

    render() {
        const data = this.props.data || [];
        const style = {
            backgroundImage: `url(${data.url})`
        }
        return (<div id="Thumbnail" style={style}/>);
    }
}
