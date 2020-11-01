
class API {
    getGameData(){
        return new Promise((resolve, _)=>{
            setTimeout(
                ()=>resolve(require('./data/gameData.json'))
                ,2000
            );
        })
    }
    getImageUrl(imageName){
        return 'https://georaff.co.uk/tmp/' + imageName;
    }
}
export default new API();