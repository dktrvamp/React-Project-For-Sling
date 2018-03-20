/*
    ./client/components/App.jsx
*/
import React from 'react';
import {schedule} from '../json/schedule.json';
import movies from '../json/movies.json';
import other from '../json/other.json';
import other1 from '../json/other1.json';
import Ribbon from './ribbon/ribbon.jsx';
// Utils method
import {uniqBy} from '../utils/utility.js';

// Sling Logo
import slingLogo from '../../assets/images/sling-logo.png';

const scheduleList = uniqBy(schedule.scheduleList || [], 'id');
const ribbons = [
    {id: 1, title: 'Schedule', tiles: scheduleList}, movies, other, other1
];


export default class App extends React.Component {
    render() {
        return <div>
            <div style={{textAlign: 'center'}}><img style={{'width': '5vw'}} src={slingLogo} align={'middle'}/></div>
            {
                ribbons.map(item => <Ribbon key={item.id} data={item}/>)
            }
            </div>

    }
}
