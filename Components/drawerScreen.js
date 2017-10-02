import {DrawerNavigator} from 'react-navigation';

//paginas que tendra nuestro menu
import Screen1 from '../Components/screen1';
import Screen2 from '../Components/screen2';
import Screen3 from '../Components/screen3';
import Screen4 from '../Components/MapBox';


//se crea una nueva instancia
const DrawerScreen = DrawerNavigator({
Screen1: {screen: Screen1},
Screen2: {screen: Screen2},
Screen3: {screen: Screen3},
Screen4: {screen: Screen4}


},{

  headerMode: 'none',
})

export default DrawerScreen;
