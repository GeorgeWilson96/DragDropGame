import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
} from 'react-native';
import { Draggable } from '../DragDropContext';
import API from '../API';

const Item = (props)=>{
    const {itemState} = props;
    return (<Draggable payload={itemState}>
        {
            ({viewProps})=>(
                <Animated.View
                    {...viewProps}
                    style={[viewProps.style, {zIndex:2,width:50,height:50, backgroundColor:'green'}]}
                >
                    <Image
                        style={{height:50, width:50}}
                        source={{uri:API.getImageUrl(itemState.value)}}
                    />
                </Animated.View>
            )
        }
    </Draggable>);
}
export default Item;