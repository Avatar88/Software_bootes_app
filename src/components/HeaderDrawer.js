import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const rightIcon = (<Icon name="shopping-cart" size={30} color="#fff" />)
const leftIcon = (<Icon name="bars" size={30} color="#fff" />)

export default class HeaderDrawer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.header}>
                <TouchableHighlight style={styles.leftButton} underlayColor='#f09' onPress={this.props.open}>
                    { leftIcon }
                </TouchableHighlight>
                <Text style={styles.title}>{this.props.title}</Text>
                <TouchableHighlight style={styles.rightButton}>
                    { rightIcon }
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f09',
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-between'
    },
    title: {
        marginTop: 30,
        fontSize: 18,
        color: '#fff',
        flex: 70,
        textAlign: 'center'
    },
    leftButton: {
        flex:15,
        marginTop: 32,
        marginLeft: 10
    },
    rightButton: {
        flex:15,
        marginTop: 32,
        marginRight: -20
    }
});