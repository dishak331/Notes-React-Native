import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../pages/Splash";
import ListScreen from "../pages/ListScreen";
import EditNoteScreen from "../pages/EditNoteScreen";
const MainStack = createStackNavigator();

export default () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#6C63FF",
      }}
    >
      <MainStack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="List"
        component={ListScreen}
        options={{
          headerTitleStyle: {
            fontStyle: "italic",
            fontWeight: "bold",
            marginLeft: 8,
            fontSize: 22,
          },
        }}
      />
      <MainStack.Screen name="EditNote" component={EditNoteScreen} />
    </MainStack.Navigator>
  );
};
