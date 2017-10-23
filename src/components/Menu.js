import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HeaderDrawer from './HeaderDrawer';

import Api from'../data/miniapi';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    _renderItem = ({item}) => (
        <TouchableHighlight 
            style={styles.itemLista} 
            onPress={() => this.props.navigation.navigate('ProductsByCat', {title: item.name_en, key: item.key})}
        >
            <Image source={{uri: item.imageUrl}} style={styles.bgimage}>
                <Text style={styles.titulo}>{item.name_en}</Text>
                <Text style={styles.descripcion}>{item.description_en}</Text>
            </Image>
        </TouchableHighlight>
    );

    open() {
        this.props.navigation.navigate('DrawerOpen');
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderDrawer title={'Menu'} open={this.open.bind(this)}/>
                <FlatList style={styles.listaCat}
                    data={Api.getCategories()}
                    renderItem={this._renderItem}
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
    bgimage: {
        flex: 1,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemLista: {
        height: 150,
        flexDirection: 'row',
        flex: 1
    },
    titulo: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center'
    },
    descripcion: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    }
});