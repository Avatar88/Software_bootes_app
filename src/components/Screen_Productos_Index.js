import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ListView,
    Alert,
    Image
} from 'react-native';
import {Icon, FormLabel, FormInput,FormValidationMessage,Button,List, ListItem } from 'react-native-elements';
import IconLogo from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';


import HeaderDrawer from './HeaderDrawer';

export default class ProductsIndex extends Component {

  constructor(props){
    super(props);


    this.state = {
      idproducto:'',
      nombre:'',
      descripcion:'',
      calorias:'',
      precio:'',
      imagen:'',
      datasource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 != r2})

    }

  }

  async componentDidMount(){
    try{
      let response = await fetch("http://192.168.1.68:3000/producto/", {
        method: "POST"

      });
      let responseJson = await response.json();
      this.setState({
        datasource: this.state.datasource.cloneWithRows(responseJson)

      })
    //  alert("sucess "+responseJson);
    }catch(error) {
      console.error(error);
    }
  }

    static navigationOptions = {
        drawerLabel: 'Administrar Productos',
        drawerIcon:({tintColor}) =>(
            <IconLogo
                name='cube'
                size={18}
                style={{color: tintColor}}
            />)
    }

    open() {
        this.props.navigation.navigate('DrawerOpen');
    }

    render() {

      const { navigate } = this.props.navigation;

    return(
            <View style={styles.container}>
                <HeaderDrawer title={'Productos'} open={this.open.bind(this)} />
                <View style = {styles.container}>

                <IconLogo
                    name='plus-circle'
                    size={30}
                    style={styles.iconPlus}
                    onPress={() => navigate('Productos_Registro')}
                />

                <ListView
                dataSource = {this.state.datasource}
                renderRow = {(rowData) =>

                  <View style = {styles.boxContainer}>


                  <Image source={{ uri: 'https://myslu.slu.edu/res/images/cas-padlock-icon.png'}} style={styles.photo} />
                  <Text style = {styles.text}>
                  {rowData.nombre}
                  </Text>

                  <Text style = {styles.text}>
                  | {rowData.precio}
                  </Text>

                  <Icon
                  style = {styles.icon}
                  name='account-box'
                  size = {30}
                  onPress={() => alert("Presiona Detalles!")}
                  />

                  <Icon
                  style = {styles.icon}
                  name='edit'
                  size = {30}
                  onPress={() => alert('Modificar Producto')}
                  />

                  <Icon
                  style = {styles.icon}
                  name='delete'
                  size = {30}
                  onPress={() => alert("Presiona Eliminar!")}
                  />

                </View>
              }

              />

              </View>

            </View>
        );
    }
  }




const styles = StyleSheet.create({

  container:{
    flex:1,
    flexDirection: 'column',

  },
  boxContainer:{
    flex:1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderColor: '#000033',
    borderWidth: 1,
    borderRadius: 5
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 20
  },
  iconPlus:{
    marginLeft: 30,
    marginBottom: 30,
    marginTop: 30

  },
  icon:{
    flex:1,
    alignItems: 'flex-end'
  }
});
