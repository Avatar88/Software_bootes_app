import React, {Component} from 'react';
import{View, Text} from 'react-native';
import { FormLabel, FormInput,FormValidationMessage,Button } from 'react-native-elements';

class Screen1 extends Component {
  render() {
    return (
<View>
<FormLabel>Nombre</FormLabel>
<FormInput value="Ingrese nombre"/>
<FormValidationMessage> {'This field is required'}</FormValidationMessage>
<Button
  title='BUTTON' />
</View>

    );

  }
}
export default Screen1;
