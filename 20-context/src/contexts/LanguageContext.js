// we need to import createContext to make space for shared state
import React, { createContext, Component } from "react";

// contexts are scoped to components
export const LanguageContext = createContext();

//wraps dependent components
export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { language: "french" };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(e) {
    this.setState({ language: e.target.value });
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
