import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import YardageHeader from './../Headers/YardageHeader';

import { Text, Card, Grid, Col } from 'react-native-elements'

export default class YardageContainer extends Component {

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
                <View>
                    <YardageHeader/>
                    <Grid>
                        <Col>
                            <Card
                                title='Hole'>
                                <Text style={styles.holeData} h3 >
                                    1
                                </Text>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                title='Par'>
                                <Text style={styles.holeData} h3 >
                                    3
                                </Text>
                            </Card>
                        </Col>
                    </Grid>
                    <Card
                        title="Yardage From Hole">
                        <Grid>
                            <Col>
                                <Text style={styles.yardageLocation} >
                                    Front
                                </Text>
                            </Col>
                            <Col>
                                <Text style={styles.yardageLocation} >
                                    Middle
                                </Text>
                            </Col>
                            <Col>
                                <Text style={styles.yardageLocation} >
                                    Front
                                </Text>
                            </Col>
                        </Grid>
                        <Grid>
                            <Col>
                                <Text style={styles.holeData} h3 >
                                    324
                                </Text>
                            </Col>
                            <Col>
                                <Text style={styles.holeData} h3 >
                                    234
                                </Text>
                            </Col>
                            <Col>
                                <Text style={styles.holeData} h3 >
                                    342
                                </Text>
                            </Col>
                        </Grid>
                    </Card>
                    <Card
                        title="Tee Distance">
                        <Grid>
                            <Col>
                                <Text style={styles.championship} h3 >
                                    375
                                </Text>
                            </Col>
                            <Col>
                                <Text style={styles.middle} h3 >
                                    365
                                </Text>
                            </Col>
                        </Grid>
                        <Grid>
                            <Col>
                                <Text style={styles.forward} h3 >
                                    300
                                </Text>
                            </Col>
                            <Col>
                                <Text style={styles.junior} h3 >
                                    290
                                </Text>
                            </Col>
                        </Grid>
                    </Card>
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
    championship: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 20,
        color: '#2c3e50'
    },
    middle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 20,
        color: '#FFC107'
    },
    forward: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 20,
        color: '#FF5722'
    },
    junior: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 20,
        color: '#00BCD4'
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 100/2,
        backgroundColor: 'red'
    }
});