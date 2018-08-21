import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import './App.css';

import One from './components/One.jsx'
import Two from './components/Two.jsx'
import Three from './components/Three.jsx'

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	      <div className="App">
	      	{/* 
          Route 渲染方式有三种：
           */}
           {/* 第一种：component */}
          <Route path="/one" component={One}/>
          {/* 第二种方法：render */}
          <Route path="/two" render={()=>{
            // return (<mark>test</mark>)
            return <Two/>
          }}/>
          {/* 第三种方法：render */}
          <Route path="/three" children={()=>{
            // return <h1>react router</h1>
            return <Three></Three>
          }}/>


          <Link to="/one">one</Link>
          <Link to="/two">two</Link>
          <Link to="/three">three</Link>
	      </div>
      </BrowserRouter>
    );
  }
}

export default App;
