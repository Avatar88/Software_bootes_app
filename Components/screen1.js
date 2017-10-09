import React, {Component} from 'react';
import{View, Text} from 'react-native';
import { FormLabel, FormInput,FormValidationMessage } from 'react-native-elements';

class Screen1 extends Component {
  render() {
    return (
<View>
<FormLabel>Nombre</FormLabel>
<FormInput/>
<FormValidationMessage> {'This field is required'}</FormValidationMessage>
</View>

    );

  }
}
export default Screen1;
