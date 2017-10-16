import React, {Component} from 'react';
import{View, Text, Alert} from 'react-native';
import { FormLabel, FormInput,FormValidationMessage,Button,List, ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    icon: 'av-timer'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
     icon: 'flight-takeoff'
  }

]
class Screen3 extends Component {
constructor(props){
  super(props);
  this.state = {
    cedula:'',
    nombres:'',
    apellidos:'',
    edad:'',
    telefono:'',
    direccion:''

  }

}
  async Click()  {
    try {
      let response = await fetch("http://192.168.1.50:3000/persona/ingresar", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify ({cedula:this.state.cedula, nombres: this.state.nombres, apellidos:this.state.apellidos, edad:this.state.edad,telefono:this.state.telefono, direccion:this.state.direccion})

      });


      let responseJson = await response.json();

      alert("sucess "+responseJson.mensaje);

    } catch(error) {
      console.error(error);
    }
  }

  render() {
    return(
      <View>
      <List containerStyle={{marginBottom: 20}}>
      {
        list.map((l, i) => (
          <ListItem
          roundAvatar
          avatar={{uri:l.avatar_url}}
          key={i}
          title={l.name}
          rightIcon={{name: l.  icon}}
          />
        ))
      }
      </List>
      <FormInput
      placeholder = "Cedula"
      onChangeText={(cedula) => this.setState({cedula})}
      />
      <FormInput
      placeholder = "Nombres"
      onChangeText={(nombres) => this.setState({nombres})}
      />
      <FormInput
      placeholder = "Apellidos"
      onChangeText={(apellidos) => this.setState({apellidos})}

      />
      <FormInput
      placeholder = "Edad"
      onChangeText={(apellidos) => this.setState({apellidos})}

      />
      <FormInput
      placeholder = "Telefono"
      onChangeText={(apellidos) => this.setState({apellidos})}

      />
      <FormInput
      placeholder = "Direccion"
      onChangeText={(apellidos) => this.setState({apellidos})}

      />

      <FormValidationMessage> {'This field is required'}</FormValidationMessage>
      <Button
      onPress={this.Click.bind(this)}
      title='BUTTON' />

      </View>
    );

  }

}
export default Screen3;
