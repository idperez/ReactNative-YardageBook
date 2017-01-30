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

import { Text, Card, Grid, Col } from 'react-native-elements'

export default class YardageContainer extends Component {

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
                <View>
                    <YardageHeader/>
                    <Hole/>
                    <Yardage/>
                    <Tee/>
                    <Card
                        title="Handicap">
                        <Grid>
                            <Col>
                                <Text style={styles.yardageLocation} >
                                    Men
                                </Text>
                            </Col>
                            <Col>
                                <Text style={styles.yardageLocation} >
                                    Women
                                </Text>
                            </Col>
                        </Grid>
                        <Grid>
                            <Col>
                                <Text style={styles.holeData} h3 >
                                    2
                                </Text>
                            </Col>
                            <Col>
                                <Text style={styles.holeData} h3 >
                                    3
                                </Text>
                            </Col>
                        </Grid>
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
    cardText: {
        textAlign: 'center'
    },
    teeText: {
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    yardageLocation: {
        textAlign: 'center',
        marginBottom: 20,
    },
    holeData: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 100/2,
        backgroundColor: 'red'
    }
});