import {action, observable, decorate} from "mobx";

class Calldata {
    CalNumber = []
    ResultDisplay = []
  
    NumberClear() {
      this.CalNumber = []
      this.ResultDisplay = []
    }
  }
  
  decorate( Calldata, {
    CalNumber: observable,
    ResultDisplay: observable,
    NumberClear : action,
  });

export default new Calldata();