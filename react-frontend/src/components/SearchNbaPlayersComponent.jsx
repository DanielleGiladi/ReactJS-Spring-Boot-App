import React, { Component } from 'react';
import PlayerService from '../services/PlayerService';

class SearchNbaPlayersComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            searchPlayers :[],
            firstName: '',
            lastName : '', 
            

        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.searchPlayer = this.searchPlayer.bind(this);
        this.cancel = this.cancel.bind(this);
        this.save = this.save.bind(this);


    }

    componentDidMount(){
        PlayerService.getAllPlayers(this.state.firstName , this.state.lastName).then((res) =>
        {
            this.setState({searchPlayers: res.data});
        });

      
    }


    searchPlayer () {
        let player = {firstName : this.state.firstName , lastName: this.state.lastName};
        console.log("play =>" +  JSON.stringify(player));
        PlayerService.getAllPlayers(this.state.firstName , this.state.lastName).then((res) =>
        {
            this.setState({searchPlayers: res.data});
        });
     
    }

    save(id , afirstName , alastName , teamName){
        PlayerService.addToFavorite(id , afirstName , alastName , teamName).then((res) =>
        {
            this.setState({searchPlayers: res.data});
        });
        this.props.history.push('/favorite');


    }

    cancel() {
        this.props.history.push('/');
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName : event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName : event.target.value});
    }

   

    
    
    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Search Player From</h3>
                            <div className = "card-body">
                                <form>
                                    
                                   <div className = "from-group">
                                        <label> First Name </label>
                                        <input pattern ="First Name" name = "firstName" className= "form-control"
                                            value={this.state.firstName} onChange = {this.changeFirstNameHandler}/>

                                   </div>

                                   <div className = "from-group">
                                        <label> Last Name </label>
                                        <input pattern ="Last Name" name = "lastName" className= "form-control"
                                            value={this.state.lastName} onChange = {this.changeLastNameHandler}/>

                                   </div>
                                  
                                    <label/>
                                    <div className = 'text-center'>
                                    <button className="btn btn-success" onClick={this.searchPlayer}  > Search </button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginleft: "30px"}}> Cancel </button>
                                   </div>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>

               <h2 className='text-center'> LIST PLAYERS</h2>
                <div className= "text-center">
                <table className = "table table-striped table-bordered">

                <thead>
                    <tr>
                        <th> Player First Name</th>
                        <th> Player Last Name</th>
                        <th> Team Name </th>
                        <th>Save To Favorite </th>
                    </tr>
                </thead>
                <tbody>
                    {
                       this.state.searchPlayers.map(
                        searchPlayer => 
                        <tr key = {searchPlayer.id}>
                             <td> {searchPlayer.firstName} </td>   
                             <td> {searchPlayer.lastName}</td>
                             <td> {searchPlayer.teamName}</td>
                             <button onClick={ () => this.save(
                                 searchPlayer.id , searchPlayer.firstName , searchPlayer.lastName , searchPlayer.teamName)}
                              className="btn btn-info">Save </button>
                             
                        </tr> 
                       )
                    }

                </tbody>
                </table>

                 
                
                </div>
        </div>
        );
    }
}

export default SearchNbaPlayersComponent;