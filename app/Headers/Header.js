import React, { Component } from 'react';

import {
    View,
    Text,
    Navigator,
    Image
} from 'react-native';

import NavigationBar from 'react-native-navbar';

import { Icon } from 'react-native-elements'

export default class SplashContainer extends Component {

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#2c3e50',}}>
                <NavigationBar
                    title={<Image source={require('./../Images/logo.png')}
                            style={{width: 60, height: 40}} /> }
                    leftButton={<Icon
                        name='chevron-left' />}
                    rightButton={<Icon
                        name='chevron-right' />}
                />
            </View>
        );
    }
}
