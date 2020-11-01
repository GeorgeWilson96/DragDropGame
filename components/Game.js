import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

import { Loading } from './Utils';
import API from '../API';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gameData:null,
            isLoading:true,
        }
    }
    componentDidMount(){
        API.getGameData()
            .then(gameData=>this.setState({gameData,isLoading:false}));
    }
    render(){
        const { gameData, isLoading } = this.state;
        if(!gameData && isLoading){
            return (<Loading />);
        }
        return(<View><Text>Loaded</Text></View>)
    }
}
export default Game;