import React, {Component} from 'react';
import {Header} from 'components/Header';
import {MessengerRedux} from 'containers/MessengerContainer';
import {Profile} from 'components/Profile';

import './Layout.sass';

export class Layout extends Component {
    render() {
        return (
            <div className="container">
                <Header location={this.props.location}/>
                <div className="main">
                    {this.props.location.pathname === '/profile/' ? <Profile/> : <MessengerRedux/>}
                </div>
            </div>
        );
    }
}