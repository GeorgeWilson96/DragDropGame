
class API {
    getGameData(){
        return new Promise((resolve, _)=>{
            setTimeout(
                ()=>resolve(require('./data/gameData.json'))
                ,2000
            );
        })
    }
}
export default new API();