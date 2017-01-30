import React, { Component } from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import { Text, Card, Grid, Col } from 'react-native-elements'

export default class Tee extends Component {

    render() {
        return (
            <View>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    }
});