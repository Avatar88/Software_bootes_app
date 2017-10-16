import React, {Component} from 'react';
import{View, Text, Alert, ListView} from 'react-native';
import { FormLabel, FormInput,FormValidationMessage,Button,List, ListItem } from 'react-native-elements';


class Screen3 extends Component {
constructor(props){
  super(props);


  this.state = {
    cedula:'',
    nombres:'',
    apellidos:'',
    edad:'',
    telefono:'',
    direccion:'',
    datasource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 != r2})

  }

}
async componentDidMount(){
  try{
    let response = await fetch("http://192.168.1.56:3000/persona/listar", {
      method: "POST"

    });
    let responseJson = await response.json();
    this.setState({
      datasource: this.state.datasource.cloneWithRows(responseJson)


    })
    //alert("sucess "+responseJson.mensaje);
  }catch(error) {
    console.error(error);
  }


}

  async Click()  {
    try {
      let response = await fetch("http://192.168.1.56:3000/persona/ingresar", {
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
      <ListView
      dataSource = {this.state.datasource}
      renderRow = {(rowData) =>

        <View>

          <Text>
            {rowData.nombres}
          </Text>
        </View>
      }
      />
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
