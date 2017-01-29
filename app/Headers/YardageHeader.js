import React, { Component } from 'react';

import {
    Navigator,
    Image
} from 'react-native';

import NavigationBar from 'react-native-navbar';

import { Icon } from 'react-native-elements'

export default class YardageHeader extends Component {

    render() {
        return (
            <NavigationBar
                title={<Image
                    source={require('./../Images/logo.png')}
                    style={{width: 60, height: 40}}
                    /> }
                leftButton={<Icon
                    name='chevron-left'
                    /> }
                rightButton={<Icon
                    name='chevron-right'
                    /> }
            />
        );
    }
}
