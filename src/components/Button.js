import React from "react";
import LanguageContex from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

class Button extends React.Component {
  renderSubmit(language) {
    return language === 'english'? 'Submit': 'Ok';
  }

  renderButton (colour){
    return (
      <button className={`ui button ${colour}`}>
        <LanguageContex.Consumer>
          {({ language }) =>  this.renderSubmit(language)}
        </LanguageContex.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColourContext.Consumer>
      {(colour) => this.renderButton(colour)}
      </ColourContext.Consumer>
    );
  }
}

export default Button;