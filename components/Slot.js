import React, { Component } from 'react';
import {
  Animated,
  Image,
} from 'react-native';

import { Droppable } from '../DragDropContext';
import API from '../API';

const Slot = (props)=>{
    const {slotsState, setSlotsState, itemsState, setItemsState, slotState, index} = props;
    return(
    <Droppable
        onDrop={({payload})=>{
            if(slotState.value)
                return;
            let newState = [...slotsState];
            let newItem = {...newState[index]};
            newItem.value = payload.value;
            newState[index] = newItem;
            setSlotsState(newState);
            newState = [...itemsState];
            newState[payload.id] = null;
            setItemsState(newState);
        }}
    >
        {({viewProps})=>{
            const {width, height, value} = slotState;
            return (
            <Animated.View 
                {...viewProps}
                style={[viewProps.style,{zIndex:1, height, width,backgroundColor:'blue'}]}
            >
                {
                    slotState?
                    <Image
                        style={{height:50, width:50}}
                        source={{uri:API.getImageUrl(value)}}
                    />
                    :
                    null
                }
            </Animated.View>);
        }}
    </Droppable>);
}

export default Slot;