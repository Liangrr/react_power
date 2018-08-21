import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {inputChangeAction,addAction,deleteAction} from './store/event.js'

// 这是正常组件
// class App extends React.Component {
//   render() {
//     let {value,data} = this.props;
//     return (
//       <div className="App">
//         <div className="handle">
//           <input type="text" value={value} onChange={this.props.handleInputChange}/>
//           <button onClick={this.props.handleAddAction}>新增</button>
//         </div>
//         <ul className="list">
//            {
//             data.map((item,index)=>{
//               return <li key={item.id}>{item.val}<span onClick={this.props.handleDeleteAction(index)}>X</span></li>
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
// }

// 无状态组件。
// 无状态组件在组件的实现中，只有render函数时，建议使用。
// 提升性能。
const App = (props)=>{
  let {value,data} = props;
  return (
    <div className="App">
      <div className="handle">
        <input type="text" value={value} onChange={props.handleInputChange}/>
        <button onClick={props.handleAddAction}>新增</button>
      </div>
      <ul className="list">
        {
          data.map((item, index)=>{
            return <li key={item.id}>{item.val}<span onClick={props.handleDeleteAction(index)}>X</span></li>
          })
        }
      </ul>
    </div>
  )
}


const mapStateToProps = (state)=>{
  console.log(state.dataModule)
  return {
    value:state.dataModule.value,
    data:state.dataModule.data,
  }
}
const  mapDispatchToProps = (dispatch)=>{
  return {
    handleInputChange(ev){
      let action = inputChangeAction(ev.target.value);
      dispatch(action);
    },
    handleAddAction(){
      let action = addAction();
      dispatch(action)
    },
    handleDeleteAction(index){
      return function(){
        console.log(index)
        let action = deleteAction(index);
        dispatch(action);
      }
      
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
