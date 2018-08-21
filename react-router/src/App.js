import React, { Component } from 'react';
import {BrowserRouter,Route,Link,NavLink} from 'react-router-dom'
import './App.css';

import One from './components/One.jsx'
import Two from './components/Two.jsx'
import Three from './components/Three.jsx'

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	      <div className="App">
					
          <One/>
          
          <Route path="/one/:id" component={One}/>

          <Route path="/two" render={({history, location, match})=>{
            console.log(history);
            console.log(location);
            console.log(match);
            return <Two id="010"></Two>
          }}/>

          <Route path="/three" component={Three}/>

          



          <NavLink to="/one?id=007">one</NavLink>

          {/*<NavLink to={{pathname: "/one", state: {id: '008'}}}>one</NavLink>
          
          <NavLink to={'/one/'+'009'}>one</NavLink>

          <NavLink to="/two">two</NavLink>


          <NavLink to="/three">three</NavLink>*/}
					
	      </div>
      </BrowserRouter>
    );
  }
}

export default App;
