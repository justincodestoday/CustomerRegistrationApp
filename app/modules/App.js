import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomerListScreen from './CustomerListScreen';
import RegisterCustomerScreen from './RegisterCustomerScreen';
import EditCustomerScreen from './EditCustomerScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CustomerListScreen">
        <Stack.Screen
          name="CustomerListScreen"
          component={CustomerListScreen}
          options={{title: 'Customers'}}
        />
        <Stack.Screen
          name="RegisterCustomerScreen"
          component={RegisterCustomerScreen}
          options={{title: 'Register Customer'}}
        />
        <Stack.Screen
          name="EditCustomerScreen"
          component={EditCustomerScreen}
          options={{title: 'Edit Customer'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
