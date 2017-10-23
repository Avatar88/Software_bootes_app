import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import HeaderDrawer from './HeaderDrawer';

export default class Callus extends Component {
    static navigationOptions = {
        drawerLabel: 'Call us',
        drawerIcon:({tintColor}) =>(
            <Icon 
                name='phone'
                size={18} 
                style={{color: tintColor}} 
            />)
    }
    
    open() {
        this.props.navigation.navigate('DrawerOpen');
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderDrawer title={'Call Us'} open={this.open.bind(this)} />
                <View style={styles.textCont}>
                    <Text style={styles.text}>Call Us Screen</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textCont: {
        backgroundColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 22,
        color: '#eee'
    }
  });
  