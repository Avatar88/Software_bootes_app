import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import HeaderStack from './HeaderStack';

const rightIcon = (<Icon name="shopping-cart" size={30} color="#fff" />)
const leftIcon = (<Icon name="chevron-left" size={30} color="#fff" />)

export default class FoodDetail extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    render() {
        const {goBack} = this.props.navigation;
        let product = this.props.navigation.state.params.product;
        return(
            <View style={styles.container}>
                <HeaderStack goBack={goBack} title={this.props.navigation.state.params.title}/>
                <ScrollView>
                    <View style={styles.content}>
                        <View style={styles.imgWrap}>
                            <Image source={{uri: product.imageUrl}} style={styles.img}/>
                        </View>
                        <View style={styles.titleWrap}>
                            <Text style={styles.labelTitle}>{product.name_en}</Text>
                            <Text style={styles.labelDescription}>{product.description_en}</Text>
                        </View>
                        <View style={styles.nutrInfo}>
                            <Text style={styles.info}>Calories</Text>
                            <Text style={styles.info}>{product.small} Kcal</Text>
                        </View>
                        <View style={styles.nutrInfo}>
                            <Text style={styles.info}>Glutten Free</Text>
                            <Text style={styles.info}>{product.key % 2 == 0 ? ('Yes') : ('No')}</Text>
                        </View>
                        <View style={styles.variantsTitle}>
                            <Text style={styles.variants}>Variants</Text>
                        </View>
                        <View style={styles.variantsContent}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.sizeVariant}>Small</Text>
                                <Text style={styles.forVariant}>For 1 person</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{padding: 5, paddingHorizontal: 20, backgroundColor: '#eee', color: '#777'}}>${product.small}</Text>
                                <TouchableHighlight underlayColor='#eee' style={{padding: 5, paddingHorizontal: 20}}>
                                    <Icon name="cart-plus" size={25} color="#777" />
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.variantsContent}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.sizeVariant}>Medium</Text>
                                <Text style={styles.forVariant}>For 2 people</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{padding: 5, paddingHorizontal: 20, backgroundColor: '#eee', color: '#777'}}>${product.medium}</Text>
                                <TouchableHighlight underlayColor='#eee' style={{padding: 5, paddingHorizontal: 20}}>
                                    <Icon name="cart-plus" size={25} color="#777" />
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.variantsContent}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.sizeVariant}>Big</Text>
                                <Text style={styles.forVariant}>For 3 people</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{padding: 5, paddingHorizontal: 20, backgroundColor: '#eee', color: '#777'}}>${product.big}</Text>
                                <TouchableHighlight underlayColor='#eee' style={{padding: 5, paddingHorizontal: 20}}>
                                    <Icon name="cart-plus" size={25} color="#777" />
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flex: 1
    },
    title: {
        marginTop: 30,
        fontSize: 18,
        color: '#fff',
        flex: 70,
        textAlign: 'center'
    },
    header: {
        backgroundColor: '#f09',
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-between'
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
    },
    content: {
        backgroundColor: '#eee'
    },
    imgWrap: {
        flexDirection: 'row',
        height: 250
    },
    img: {
        height: 250,
        flex: 1
    },
    titleWrap: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelTitle: {
        height: 60,
        backgroundColor: '#fff',
        fontSize: 22,
        textAlign: 'center',
        paddingTop: 14,
        paddingHorizontal: 20
    },
    labelDescription: {
        marginVertical: 10,
        color: '#777',
        fontSize: 14
    },
    nutrInfo: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        borderWidth: 0.5,
        borderColor: '#ccc',
        padding: 5
    },
    info: {
        fontSize: 17,
        color: '#111'
    },
    variantsTitle: {
        height: 40,
        backgroundColor: '#eee',
        flexDirection: 'row'
    },
    variants: {
        flex: 1,
        fontSize: 17,
        color: '#777',
        textAlign: 'center',
        marginVertical: 10
    },
    sizeVariant: {
        fontSize: 17,
        color: '#333'
    },
    forVariant: {
        fontSize:11,
        color: '#aaa'
    },
    variantsContent: {
        backgroundColor: '#fff',
        padding: 5,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#999'
    }
  });
