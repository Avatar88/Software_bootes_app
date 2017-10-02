import { StackNavigator } from 'react-navigation';

import DrawerStack from './Components/drawerStack.js';

const Navigator = StackNavigator({//objeto navigator

        drawerStack : {screen : DrawerStack}
// se puede añadir otro conjunto de pantallas como un login
        },{
//propiedades que queremos modificar
        headerMode : 'none',
        initalRouteName : 'drawerStack' //ruta principal


})

export default Navigator;
