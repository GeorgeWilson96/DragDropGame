import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import API from '../API';
import PuzzleBoard from './PuzzleBoard';
import { Loading } from './Utils';

class Game extends Component {
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
        return(<View>
            {gameData.puzzleBoards.map((puzzleBoard, index)=><PuzzleBoard key={index} {...puzzleBoard} />)}
        </View> )
    }
}
export default Game;