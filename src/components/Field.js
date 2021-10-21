import React from 'react';
import LanguageContex from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContex;

  render() {
    const text = this.context.language === 'english' ? 'Name' : 'namae'
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

export default Field;
