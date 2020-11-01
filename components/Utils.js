import React from 'react';
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

const Loading = ()=> <View style={{height:'100%', alignContent:'center', justifyContent:'center', alignItems:'center'}}>
    <ActivityIndicator size="large" color="#000000"/>
    <Text >Loading</Text>
</View>
export {Loading};