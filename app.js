import { StackNavigator } from 'react-navigation';
//as
import DrawerStack from 'Components/drawerStack.js';

const Navigator = StackNavigator({

        drawerStack : {screen : DrawerStack}

        },{

        headerMode : 'none',
        initalRouteName : 'drawerStack'

})

export default Navigator;
