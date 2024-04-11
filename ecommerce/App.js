import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Products from './components/Products'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import { store ,persistor} from './components/Redux/store';
import cart from './components/cart';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PersistGate } from 'redux-persist/integration/react';

const stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen
              name="products"
              component={Products}
              options={({ navigation }) => ({
                headerTitle: 'Products',
                headerRight: () => <Clip />,
              })}
            />
            <stack.Screen
              name="cart"
              component={cart}
              options={({ navigation }) => ({
                headerTitle: 'My Cart',
                headerRight: () => <Clip />,
              })}
            />
          </stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const Clip = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('cart')}>
      <View style={{ marginRight: 10 }}>
        <MaterialCommunityIcons name="cart" size={30} color="black" />
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: 10,
            width: 20,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
            top: -5,
            right: -5,
          }}
        >
          <Text style={{ color: 'white', fontSize: 12 }}>{cart.length}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});