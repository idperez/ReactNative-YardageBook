import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import Header from './../Headers/YardageHeader';

export default class YardageContainer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Text>Yardage Page.</Text>
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

