import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name='screenA'
                component={ScreenA}
                options={{
                    title: 'Tela A'
                }}
            />
            <Drawer.Screen
                name='screenB'
                component={ScreenB}
                options={{
                    title: 'Tela B',
                }}
                
            />
                <Drawer.Screen
                name='screenC'
                component={ScreenC}
                options={{
                    title: 'Tela C',
                }}
                
            />
        </Drawer.Navigator>
    )
}