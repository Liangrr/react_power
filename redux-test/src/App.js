import React, { Component } from 'react';
import store from './store'
import './App.css';
import {addAction,deleteAction} from './store/event.js'

//从输入框改变值，传到事件，进行dispatch传到store，store创建一个redux，并且传到redux
//然后redux进行判断，如果有对应的函数(这里的函数又再分模块，dataReducer)，则执行并且返回新的值，没有则返回默认。
//得到改变后的值，在原传值页面的componentDidMount中进行更新把改变后的值重新刷新（这里需要一个store.subscribe）
//执行完在销毁周期前销毁store.subscribe返回的函数值
class App extends Component {
  constructor(){
    super();
    //初始化赋值
    this.state = store.getState();
  }
  render() {
    let {dataModule} = this.state;
    let {data} = dataModule;

    return (
      <div className="App">
      	<div className="handle">
          <input type="text" ref='inp' />
          <button onClick={this.add.bind(this)}>新增</button>
        </div>
        <ul className="list">
          {
            data.map((item, index)=>{
              return <li key={item.id}>{item.val}<span onClick={this.del.bind(this,index)}>X</span></li>
            })
          }
        </ul>
      </div>
    );
  }
//添加
	add(){
//		这里存值可以直接存对象,也可以模块化存函数(这里存到event，再返回对象)
		let action = addAction(this.refs.inp.value)
//		{
//			type:"add-data",
//			value:this.refs.inp.value
//		}

//		清空
		this.refs.inp.value = ''
//		dispatch存到reducer，返回新的state
		store.dispatch(action);
	}
//删除
	del(index){
		let action = deleteAction(index);
		store.dispatch(action);
	}
	componentDidMount(){
		this.unSubcribe = store.subscribe(()=>{
//			这里进行刷新dom
			this.setState(store.getState());
		})
	}
	componentWillUnmount(){
      //组件销毁时，移除监听
      this.unSubcribe();
    }
}

export default App;
