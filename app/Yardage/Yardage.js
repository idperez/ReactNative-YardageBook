import React, { Component } from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import { Text, Card, Grid, Col } from 'react-native-elements'

export default class Yardage extends Component {

    render() {
        return (
            <View>
                <Card
                    title="Yardage From Green">
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    yardageLocation: {
        textAlign: 'center',
        marginBottom: 20,
    },
    holeData: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
});