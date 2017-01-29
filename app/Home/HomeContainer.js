import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import Header from './../Headers/Header';

export default class HomeContainer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Text>Home Page.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50'
    }
});

