import React, { Component } from 'react';

import {
    Navigator,
    Image,
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

import NavigationBar from 'react-native-navbar';

import { Icon } from 'react-native-elements'

export default class YardageHeader extends Component {

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
                <View>
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
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50'
    },
    image: {
        width: 312,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain'
    },
    cardText: {
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    teeButton: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0
    }
});
