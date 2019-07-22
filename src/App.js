import React, {Fragment, Component} from 'react';

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
     counter : 0,
   };

  }
  
  incrimentCounter = e =>{
    e.preventDefault(); 
    let counter = this.state.counter
    counter ++
    this.setState({counter});

  };

  decrimentCounter = e => {
    e.preventDefault(); 
    let counter = this.state.counter
    counter --
    this.setState({counter});

  };

  render(){
    return(
      <Fragment>
        <p>{this.state.counter}</p>
        <button onClick={this.incrimentCounter}> + </button>
        <button onClick= {this.decrimentCounter}> - </button>
        

      </Fragment>
    );
  }
}



class App extends Component{
  render(){
    return (
    <Fragment>
      <Counter/>
    </Fragment>
    );
  }
}

export default App;
