import React, { Component } from 'react';
import PlayerService from '../services/PlayerService';

class ListNbaPlayerComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            favoritesPlayers :[]

        }

        this.searchPlayer= this.searchPlayer.bind(this);
    }

    componentDidMount(){
       
        PlayerService.getFavoritesPlayers().then((res) =>
        {
            this.setState({favoritesPlayers : res.data});
        });
    }

    searchPlayer(){
        this.props.history.push('/search');
    }




    render() {
        return ( 
            <div>
                 <h2 className='text-center'> FAVORITE PLAYERS</h2>
                <div className = "text-center">
                    <button className = "btn btn-primary" onClick = {this.searchPlayer} >Search Players</button>
                </div>
                <label/>
                <div>
               
                <div className= "text-center">
                <table className = "table table-striped table-bordered">

                <thead>
                    <tr>
                        <th> Player First Name</th>
                        <th> Player Last Name</th>
                        <th> Team Name </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                       this.state.favoritesPlayers.map(
                        favoritesPlayer => 
                        <tr key = {favoritesPlayer.id}>
                             <td> { favoritesPlayer.firstName} </td>   
                             <td> {favoritesPlayer.lastName}</td>
                             <td> {favoritesPlayer.teamName}</td>
                             
                        </tr> 
                       )
                    }

                </tbody>
                </table>

                 
                
                </div>
                </div>
                

                



            </div>
        );
    }
}

export default ListNbaPlayerComponent;