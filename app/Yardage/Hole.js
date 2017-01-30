import React, { Component } from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import { Text, Card, Grid, Col } from 'react-native-elements'

export default class Hole extends Component {

    render() {
        return (
                <View>
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
                </View>
        );
    }
}

const styles = StyleSheet.create({
    holeData: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
});