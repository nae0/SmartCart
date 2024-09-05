// In App.js in a new project

import React,{ useEffect, } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JoinScreen from './screen/JoinScreen';
import SearchScreen from './screen/SearchScreen';
import SearchResultScreen from './screen/SearchResultScreen';
import ProductDetailScreen from './screen/ProductDetailScreen';
import CartScreen from './screen/CartScreen';
import MyPageScreen from './screen/MyPageScreen';
import { PermissionsAndroid, Platform } from 'react-native';
import OrderListScreen from './screen/OrderListScreen';
import OrderListDetailScreen from './screen/OrderListDetailScreen';
import { Provider } from 'react-redux';
import store from './Redux/store';
import LoginScreen from './Screen/LoginScreen';
import UserInfoModifyScreen from './Screen/UserInfoModifyScreen';
import UserInfoModifyDetailScreen from './Screen/UserInfoModifyDetailScreen';


const Stack = createNativeStackNavigator();

//카메라 권한 요청
const requestCameraPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    }
  } catch (err) {
    console.warn(err);
  }
};

function App() {
  useEffect(()=>{
    requestCameraPermission();
  },[]);
  
  //화면들을 담는 컨테이너 
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Join" component={JoinScreen} options={{ headerShown: false ,animation:'fade'}}/>
          <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false}}/>
          <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false,animation:'fade'}} />
          <Stack.Screen name="SearchResult" component={SearchResultScreen} options={{ headerShown: false, animation:'fade'}}/>
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false ,animation:'fade'}}/>
          <Stack.Screen name="MyPage" component={MyPageScreen} options={{ headerShown: false ,animation:'fade'}}/>
          <Stack.Screen name="OrderList" component={OrderListScreen} options={{ headerShown: false, animation:'ios'}} />
          <Stack.Screen name="OrderListDetail" component={OrderListDetailScreen} options={{ headerShown: false ,animation:'default'}}/>
          <Stack.Screen name="UserInfoModify" component={UserInfoModifyScreen} options={{headerShown: false ,animation:'default'}}/>
          <Stack.Screen name="UserInfoModifyDetail" component={UserInfoModifyDetailScreen} options={{headerShown: false, animation:'default'}}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}

export default App;


