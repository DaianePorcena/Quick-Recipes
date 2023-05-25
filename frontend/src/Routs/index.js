import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StackRoutes } from "./stackRoutes";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#C60024",

                tabBarStyle:{
                    backgroundColor: "#FFF",
                    borderTopWidth: 0
                }
            }}
        
        >
            <Tab.Screen name="HomeTab" component={StackRoutes} 
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        if(focused){
                            return <Ionicons name="home" color="#C60024" size={size} />
                        }

                        return <Ionicons name="home-outline" color="#C60024" size={size} />
                    }
                }}
            />
            {/* <Tab.Screen name="Favorites" component={Favorites} 
                 options={{
                    tabBarIcon: ({ size, focused }) => {
                        if(focused){
                            return <Ionicons name="heart" color="#C60024" size={size} />
                        }

                        return <Ionicons name="heart-outline" color="#C60024" size={size} />
                    }
                }}
            /> */}
        </Tab.Navigator>
    )
}
