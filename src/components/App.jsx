/*
    ./client/components/App.jsx
*/
import React from 'react';
import {schedule} from '../json/schedule.json';
import Ribbon from './ribbon/ribbon.jsx';
// Utils method
import {uniqBy} from '../utils/utility.js';

const scheduleList = uniqBy(schedule.scheduleList || [], 'id');

export default class App extends React.Component {
    render() {
        return (<Ribbon data={scheduleList}/>);
    }
}
