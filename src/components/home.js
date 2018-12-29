import React, {Component} from "react";
import Calldata from "../store/caldata";
import {observer} from "mobx-react";
import math from 'mathjs'
import Resultarea from "./resultarea";
import Button from "./tbuttons";

Calldata.GetNumber = function(value) {
  this.CalNumber = value
}

Calldata.GetResult = function(value) {
  this.ResultDisplay = value
}

const Home = observer(
  class Home extends Component {
      calculateOperations = () => {
        let result = Calldata.CalNumber.join('')
        if (result) {
          result = math.eval(result)
          Calldata.GetResult(result)
        } else {
          Calldata.GetResult(0)  
        }
      }

      Button_click = (e) => {
        const value = e.target.getAttribute('data-value')
        if(value === 'clear'){
          Calldata.GetNumber(Calldata.CalNumber.slice(0, -1))
        } else if(value === 'ac'){
          Calldata.NumberClear()
        } else if(value === 'equal') {
          this.calculateOperations()
        } else {
          Calldata.CalNumber.push(value)
          const aoperations_single = Calldata.CalNumber.map((num) => num);
          Calldata.GetNumber(aoperations_single)
        }
      }

     render() {
              return (
                  <div className="wraper">
                    <div className="taslim-calculator">
                      <Resultarea data={Calldata.CalNumber} resultdata={Calldata.ResultDisplay} />
                      <div className="Allbutton">
                        <Button onClick={this.Button_click} label="C" value="clear" />
                        <Button onClick={this.Button_click} label="7" value="7" />
                        <Button onClick={this.Button_click} label="4" value="4" />
                        <Button onClick={this.Button_click} label="1" value="1" />
                        <Button onClick={this.Button_click} label="0" value="0" />

                        <Button onClick={this.Button_click} label="AC" value="ac" />
                        <Button onClick={this.Button_click} label="8" value="8" />
                        <Button onClick={this.Button_click} label="5" value="5" />
                        <Button onClick={this.Button_click} label="2" value="2" />
                        <Button onClick={this.Button_click} label="00" value="00" />

                        <Button label="" value="null" />
                        <Button onClick={this.Button_click} label="9" value="9" />
                        <Button onClick={this.Button_click} label="6" value="6" />
                        <Button onClick={this.Button_click} label="3" value="3" />
                        <Button onClick={this.Button_click} label="." value="." />

                        <Button onClick={this.Button_click} label="/" value="/" />
                        <Button onClick={this.Button_click} label="x" value="*" />
                        <Button onClick={this.Button_click} label="-" value="-" />
                        <Button onClick={this.Button_click} label="+" value="+" />
                        <Button onClick={this.Button_click} label="=" value="equal" />
                      </div>
                    </div>
                  </div>
              )
          }
    }
);
export default Home;