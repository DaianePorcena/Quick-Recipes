import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Detail } from "../pages/Details";


const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Detail"
                component={Detail}
                options={{
                    title: 'Detalhes da receita',
                    headerStyle: {
                        backgroundColor: '#C60024',
                    }, 
                    headerTintColor: '#FFF',
                    headerTitleStyle: { fontFamily: 'Cookie_400Regular', fontSize: 32}
                    
                }}
            />
        </Stack.Navigator>
    )

}