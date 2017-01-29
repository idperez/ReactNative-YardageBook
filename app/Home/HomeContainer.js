import React, { Component } from 'react';

import {
    View,
    Text
} from 'react-native';

import Header from './../Headers/Header';

export default class HomeContainer extends Component {

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#2c3e50',}}>
                <Header/>
                <Text>Home Page.</Text>
            </View>
        );
    }
}
