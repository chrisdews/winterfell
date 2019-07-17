import React from 'react';
import { get } from 'https';

class Character extends React.Component{
   
    
    map_array = () =>{
        return this.state.characters.map(character => <div>{character.name}</div>)
    }

    constructor(props)
    {
        super(props);
        this.getCharacters()
        this.state = {
            characters : []
        }
    }

    getCharacters(){
        fetch('https://anapioficeandfire.com/api/houses/362')
            .then(response => response.json())
            .then(data => (data.swornMembers))
                .then(swornMembers => 
                    swornMembers.forEach(element => {
                    fetch(element)
                        .then(response => response.json())
                        .then(character => character)
                        .then(character => this.setState({
                            characters: [...this.state.characters, character]
                        }))     
                })
                )
    }
    
    render(){
        return( 
            <div>
                {this.map_array()}
            </div>
        )
    }
}



export default Character;
