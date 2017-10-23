import React, {Component} from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, ScrollView, Text, PixelRatio, TouchableOpacity, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import {ImagePicker} from 'react-native-image-picker';


class Screen1 extends Component {

  constructor(props) {
     super(props);
     this.state = {nombre: '', descripcion: '' , calorias: '', precio: '', ImageSource: ''};
   }


   selectPhotoTapped() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };

       ImagePicker.showImagePicker(options, (response) => {
         console.log('Response = ', response);

         if (response.didCancel) {
           console.log('User cancelled photo picker');
         }
         else if (response.error) {
           console.log('ImagePicker Error: ', response.error);
         }
         else if (response.customButton) {
           console.log('User tapped custom button: ', response.customButton);
         }
         else {
           let source = { uri: response.uri };

           // You can also display the image using data:
           // let source = { uri: 'data:image/jpeg;base64,' + response.data };

           this.setState({

             ImageSource: source

           });
         }
       });
     }


  async _onPressButtonCreate() {

    try {

      let response = await fetch("http://192.168.1.58:3000/producto/create", {

        method:"POST",
        headers:{

          'Accept':'application/json',
          'Content-Type': 'application/json'

        },

        body:JSON.stringify({nombre:this.state.nombre , descripcion : this.state.descripcion, calorias : this.state.calorias, precio: this.state.precio, ImageSource:this.state.ImageSource})

      });

      let responseJson = await response.json();
      alert(responseJson.mensaje);

    } catch(error){

      console.error(error);

    }

 }


  render() {
   return (

<View >


      <FormInput placeholder={"Nombre"}  onChangeText={(nombre) => this.setState({nombre})} />
      <FormValidationMessage> {'This field is required'}</FormValidationMessage>

      <FormInput placeholder={"Descripcion"}  onChangeText={(descripcion) => this.setState({descripcion})}  />
      <FormValidationMessage> {'This field is required'}</FormValidationMessage>

      <FormInput placeholder={"Calorias"} type={'only-numbers'}  onChangeText={(calorias) => this.setState({calorias})} />
      <FormValidationMessage> {'This field is required'}</FormValidationMessage>

      <FormInput placeholder={"Precio"} type={'only-numbers'}   />
      <FormValidationMessage> {'This field is required'}</FormValidationMessage>

      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>

      <View >

           { this.state.ImageSource === null ? <Text>Select a Photo</Text> :
             <Image  />
           }

           </View>

      </TouchableOpacity>




      <Button
        raised
        buttonStyle={{backgroundColor: 'red'}}
        icon={{name: 'user', type: 'font-awesome'}}
        onPress={() => this._onPressButtonCreate()}
        title='Crear' />

</View>

   );
 }

}







export default Screen1;
