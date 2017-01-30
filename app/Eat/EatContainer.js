import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Linking,
    ScrollView,
    List,
    ListItem
} from 'react-native';

import Header from './../Headers/Header';
import FitImage from 'react-native-fit-image'
import Communications from 'react-native-communications';

import { SocialIcon, Card, Button } from 'react-native-elements'

export default class EatContainer extends Component {

    render() {
        const facebook = 'https://www.facebook.com/mulligansatwesternskies/';
        const instagram = 'https://www.instagram.com/explore/locations/528238619/';
        return (
            <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
                <View>
                    <Header/>
                    <Card
                        title='Our Restaurant'>
                        <FitImage
                            source={require('./../Images/eat.jpg')}
                            style={styles.image}
                        />
                        <Text style={styles.cardText} >
                            Good food, cold beverages & friendly faces is expected when visiting Mulligans
                        </Text>
                        <Button
                            backgroundColor='#2ecc71'
                            buttonStyle={styles.teeButton}
                            iconRight
                            icon={{name: 'phone'}}
                            title='Call Mulligans'
                            onPress={() => Communications.phonecall('4805458542', true)}/>
                    </Card>
                    <Card
                        title='Hours' style={{marginBottom: 20}}>
                        <Text style={styles.cardTextDay} >Monday</Text>
                        <Text style={styles.cardText} >7:00AM - 8:00PM</Text>
                        <Text style={styles.cardTextDay} >Tuesday</Text>
                        <Text style={styles.cardText} >7:00AM - 8:00PM</Text>
                        <Text style={styles.cardTextDay} >Wednesday</Text>
                        <Text style={styles.cardText} >7:00AM - 8:00PM</Text>
                        <Text style={styles.cardTextDay} >Thursday</Text>
                        <Text style={styles.cardText} >7:00AM - 8:00PM</Text>
                        <Text style={styles.cardTextDay} >Friday</Text>
                        <Text style={styles.cardText} >7:00AM - 8:00PM</Text>
                        <Text style={styles.cardTextDay} >Saturday</Text>
                        <Text style={styles.cardText} >6:00AM - 7:00PM</Text>
                        <Text style={styles.cardTextDay} >Sunday</Text>
                        <Text style={styles.cardText} >6:00AM - 7:00PM</Text>

                    </Card>
                    <Card
                        title='Specials' style={{marginBottom: 20}}>
                        <Text style={styles.cardTextDay} >Monday</Text>
                        <Text style={styles.cardText} >One pound of wings and a two domestic drafts for $10</Text>
                        <Text style={styles.cardTextDay} >Tuesday</Text>
                        <Text style={styles.cardText} >Taco Tuesday, $2 tacos, $3 Dos Equis, Coronas or Pacificos</Text>
                        <Text style={styles.cardTextDay} >Wednesday</Text>
                        <Text style={styles.cardText} >Kids eat FREE with paid adult.
                            All you can eat Pasta Bar 5:00pm-7:00pm $12.95</Text>
                        <Text style={styles.cardTextDay} >Thursday</Text>
                        <Text style={styles.cardText} >Prime Rib Dinner $16.95</Text>
                        <Text style={styles.cardTextDay} >Friday</Text>
                        <Text style={styles.cardText} >ALL YOU CAN EAT Fish Fry</Text>
                        <Text style={styles.cardTextDay} >Saturday</Text>
                        <Text style={styles.cardText} >$3 well drinks, $3 domestic bottles</Text>
                        <Text style={styles.cardTextDay} >Sunday</Text>
                        <Text style={styles.cardText} >HAPPY HOUR ALL DAY</Text>

                    </Card>
                    <Card
                        title='Follow Mulligans' style={{marginBottom: 20}}>
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
        width: 300,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain'
    },
    cardText: {
        marginBottom: 10,
        textAlign: 'center',
    },
    cardTextDay: {
        marginBottom: 10,
        textAlign: 'center',
        color: '#2ecc71'
    },
    teeButton: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0
    }
});

