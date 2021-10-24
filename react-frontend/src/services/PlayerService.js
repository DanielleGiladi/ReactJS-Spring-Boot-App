import axios from 'axios';

const NBA_PLAYERS_API_BASE_URL = "http://localhost:8080/"

class PlayerService{

    getFavoritesPlayers(){
        return axios.get(NBA_PLAYERS_API_BASE_URL + "favorite");

    }

    getAllPlayers(firstName , lastName){
        return axios.get(NBA_PLAYERS_API_BASE_URL + "allPlayers?firstName=" + firstName + "&lastName="  +lastName)
    }

    addToFavorite(aid , afirstName , alastName , ateamName){
        let player = {id: aid,firstName :afirstName , lastName: alastName , teamName: ateamName};
      
        return axios.post(NBA_PLAYERS_API_BASE_URL + "addPlayer" , player)

    }

}

export default new PlayerService()