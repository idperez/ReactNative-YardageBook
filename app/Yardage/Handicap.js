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
                    title="Handicap">
                    <Grid>
                        <Col>
                            <Text style={styles.handicap} >
                                Men
                            </Text>
                        </Col>
                        <Col>
                            <Text style={styles.handicap} >
                                Women
                            </Text>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col>
                            <Text style={styles.handicapData} h3 >
                                2
                            </Text>
                        </Col>
                        <Col>
                            <Text style={styles.handicapData} h3 >
                                3
                            </Text>
                        </Col>
                    </Grid>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    handicap: {
        textAlign: 'center',
        marginBottom: 20,
    },
    handicapData: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
});