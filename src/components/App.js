import React from 'react';
import { LanguageStore } from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';
import LanguageSelector from './LanguageSelector';
import UserCreate from './UserCreate';

class App extends React.Component {
  render() {
    return (
    <div className="ui container">
      <LanguageStore>
        <LanguageSelector />  
          <ColourContext.Provider value='green'>
           <UserCreate />
        </ColourContext.Provider>
      </LanguageStore>
    </div>
    );
  }
}

export default App;