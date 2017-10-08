import {DrawerNavigator} from 'react-navigation';

//paginas que tendra nuestro menu
import Screen1 from '../Components/Gestion_Productos';
import Screen2 from '../Components/screen2';
import Screen3 from '../Components/screen3';
import Screen4 from '../Components/MapBox';


//se crea una nueva instancia
const DrawerScreen = DrawerNavigator({
Admin_Productos: {screen: Screen1},
Screen2: {screen: Screen2},
Screen3: {screen: Screen3},
MapBox: {screen: Screen4},

},{
  headerMode: 'none',
})

export default DrawerScreen;
