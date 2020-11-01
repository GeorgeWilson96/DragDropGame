import React, { Component } from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';

import Slot from './Slot';
import Item from './Item';
import { FlexView, Hr } from './Utils';
import API from '../API';
import { Provider } from '../DragDropContext';

const PuzzleBoard = (props)=>{
    //TODO: implement xpos and ypos
    const { slots, items, image, xpos, ypos, } = props;
    //TODO: handle multiple items in both slots and items
    const slotAmount = slots.length>0?slots[0].amount:0;
    const itemAmount = items.length>0?items[0].amount:0;
    const itemImage = items.length>0?items[0].image:0;

    const [ slotsState, setSlotsState ] = React.useState(
        Array(slotAmount).fill({ width:slots[0].width, height:slots[0].height })
    );
    const [ itemsState, setItemsState ] = React.useState(
        Array(itemAmount).fill(itemImage).map((item,i)=>({id:i,value:item}))
    );
    
    return (<ImageBackground source={{uri:API.getImageUrl(image)}} style={{width:'100%',height:200,paddingVertical:12}} imageStyle={{resizeMode:'stretch'}}>
        <Provider>
            <View>
                <FlexView>
                    {slotsState.map((slotState,index)=>(
                        <Slot
                            {...{
                                slotState,
                                slotsState,
                                setSlotsState,
                                itemsState,
                                setItemsState,
                                index,
                            }}
                        />)
                    )}
                </FlexView>
                <Hr lineWidth={3} lineSpacing={6}/>
                <FlexView>
                {itemsState.map((itemState,index)=>(
                    itemState == null?
                        <View
                            style={{width:50,height:50}}
                        />
                    :
                        <Item
                            itemState={itemState}
                        />
                    )
                )}
                </FlexView>
            </View>
        </Provider>
    </ImageBackground>);
}

export default PuzzleBoard;