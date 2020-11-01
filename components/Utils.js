import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

const Loading = ()=>(
    <View style={{height:'100%', alignContent:'center', justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" color="#000000"/>
        <Text >Loading</Text>
    </View>
);
const FlexView = (props)=>(
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
        {props.children}
    </View>
);
const Hr = (props)=>{
    const {lineWidth, lineSpacing} = props;
    return(
        <View
            style={{
                marginVertical: lineSpacing?lineSpacing:5,
                borderBottomColor: 'black',
                borderBottomWidth: lineWidth?lineWidth:1
            }}
        />
    );
}
Hr.propTypes = {
    lineWidth: PropTypes.number,
    lineSpacing: PropTypes.number,
}
export {Loading, FlexView, Hr};