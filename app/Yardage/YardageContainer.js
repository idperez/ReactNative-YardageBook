import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import YardageHeader from './../Headers/YardageHeader';

import Hole from './Hole';
import Yardage from './Yardage';
import Tee from './Tee';
import Handicap from './Handicap';

export default class YardageContainer extends Component {

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
                <View>
                    <YardageHeader/>
                    <Hole/>
                    <Yardage/>
                    <Tee/>
                    <Handicap/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50'
    }
});