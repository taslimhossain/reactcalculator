import React, { Component } from 'react';
import HeaderArea from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderArea />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;