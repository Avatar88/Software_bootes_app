import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TouchableHighlight
} from 'react-native';

import HeaderStack from './HeaderStack';

import Api from'../data/miniapi';

export default class ProductsByCat extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    _renderItem = ({item}) => (
        <TouchableHighlight style={styles.prodWrap} underlayColor='#fef' onPress={() => this.props.navigation.navigate('FoodDetail', {title: item.name_en, product: item})}>
            <View style={styles.wrapCont}>
                <Image source={{uri: item.imageUrl}} style={styles.image}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.product}>{item.name_en}</Text>
                    <Text style={styles.description}>{item.description_en}</Text>
                    <Text style={styles.price}>from ${item.small}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );

    render() {
        const {goBack} = this.props.navigation;
        let cat_key = this.props.navigation.state.params.key;
        return(
            <View style={styles.container}>
                <HeaderStack goBack={goBack} title={this.props.navigation.state.params.title}/>
                <FlatList style={styles.listaProd}
                    data={Api.getProductsByCat(cat_key)}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flex: 1
    },
    listaProd: {
        padding: 10
    },
    listSeparator: {
        height: 12,
        backgroundColor: '#eee'
    },
    prodWrap: {
        padding: 5,
        height: 100,
        backgroundColor: '#fff'
    },
    image: {
        borderRadius: 10,
        flex: 0.30,
        height: 90
    },
    rightContainer: {
        flex: 0.7,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    product: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 13,
        color: '#555'
    },
    price: {
        fontSize: 10,
        fontStyle: 'italic',
        color: '#111',
    },
    wrapCont: {
        flex: 1,
        flexDirection: 'row'
    }
  });
