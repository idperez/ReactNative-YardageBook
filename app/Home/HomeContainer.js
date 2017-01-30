import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    Linking,
    ScrollView
} from 'react-native';

import Header from './../Headers/Header';

import { SocialIcon, Card, ListItem, Button } from 'react-native-elements'



export default class HomeContainer extends Component {

    render() {
        const url = 'http://www.westernskiesgolf.com/request_tt/';
        const facebook = 'https://www.facebook.com/Western-Skies-Golf-Club-128509396749/';
        const instagram = 'https://www.instagram.com/westernskiesgolfclub/';
        const twitter = 'https://twitter.com/westernskiesgc';
        return (
            <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
            <View>
                <Header/>
                <Card
                    title='Welcome'>
                    <Image
                        source={require('./../Images/home.jpg')}
                        style={styles.image}
                    />
                    <Text style={styles.cardText} >
                        If you don't have a tee time, go make one already! Stop by Mulligans after your round for food and drinks.
                    </Text>
                    <Button
                        backgroundColor='#2ecc71'
                        buttonStyle={styles.teeButton}
                        title='Book Tee Time'
                        onPress={() => Linking.openURL(url)}/>
                </Card>
                <Card
                    title='Follow Us' style={{marginBottom: 20}}>
                    <SocialIcon
                        title='Facebook'
                        button
                        type='facebook'
                    />
                    <SocialIcon
                        title='Instagram'
                        button
                        light
                        type='instagram'
                    />
                    <SocialIcon
                        title='Twitter'
                        button
                        type='twitter'
                    />
                </Card>
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

