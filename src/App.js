import React from 'react';
import logo from './logo.svg';
import './App.css';
import Characters from './components/Characters'
import CharacterSidebar from './components/CharacterSidebar'

class App extends React.Component {

  state = {
    characters: Characters
  }


  render (){
    return (
      <>
      <Characters />
      <CharacterSidebar characters={Characters} />

      </>
    );
  }
}

export default App;
