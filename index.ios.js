import React, { Component } from 'react';
import {
    AppRegistry,
    TabBarIOS,
    StyleSheet
} from 'react-native';

import { Tabs, Tab, Icon } from 'react-native-elements'

import Home from './app/Home/HomeContainer';
import Yardage from './app/Yardage/YardageContainer';
import Eat from './app/Eat/EatContainer';
import More from './app/More/MoreContainer';

export default class Western extends Component {

    constructor() {
        super();
        this.state = {
            selectedTab: 'home',
        }
    }

    changeTab (selectedTab) {
        this.setState({selectedTab})
    }

    render() {

        const { selectedTab } = this.state;

        return (
            <Tabs>
                <Tab
                    titleStyle={styles.title}
                    selectedTitleStyle={styles.selectedTitle}
                    selected={selectedTab === 'home'}
                    title={selectedTab === 'home' ? 'HOME' : null}
                    renderIcon={() => <Icon style={styles.iconContainer} color={'#5e6977'} name='home' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='home' size={30} />}
                    onPress={() => this.changeTab('home')}>
                    <Home />
                </Tab>
                <Tab
                    titleStyle={styles.title}
                    selectedTitleStyle={styles.selectedTitle}
                    selected={selectedTab === 'yardage'}
                    title={selectedTab === 'yardage' ? 'YARDAGE' : null}
                    renderIcon={() => <Icon style={styles.iconContainer} color={'#5e6977'} name='golf-course' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='golf-course' size={30} />}
                    onPress={() => this.changeTab('yardage')}>
                    <Yardage/>
                </Tab>
                <Tab
                    titleStyle={styles.title}
                    selectedTitleStyle={styles.selectedTitle}
                    selected={selectedTab === 'eat'}
                    title={selectedTab === 'eat' ? 'EAT' : null}
                    renderIcon={() => <Icon style={styles.iconContainer} color={'#5e6977'} name='restaurant-menu' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='restaurant-menu' size={30} />}
                    onPress={() => this.changeTab('eat')}>
                    <Eat/>
                </Tab>
                <Tab
                    titleStyle={styles.title}
                    selectedTitleStyle={styles.selectedTitle}
                    selected={selectedTab === 'more'}
                    title={selectedTab === 'more' ? 'MORE' : null}
                    renderIcon={() => <Icon style={styles.iconContainer} color={'#5e6977'} name='list' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='list' size={30} />}
                    onPress={() => this.changeTab('more')}>
                    <More/>
                </Tab>
            </Tabs>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 10
    },
    selectedTitle: {
        marginTop: -1,
        marginBottom: 6
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    }
});

AppRegistry.registerComponent('Western', () => Western);
