import React, {Component} from 'react'

export default class One extends Component{
    // 当前组件被Route以component的方式装载，可以在constructor中接收路由参数
    constructor({history, location, match}){
        super();
//      console.log(history);
        /*
        history:路由操作对象
            history.push()
            history.replace()
            history.go()
            history.goBack()
            history.goForward()
        */
//      console.log(location);
        /*
        location:
            可以利用state传值
        */
        console.log(match);
        /*
            match:
            可以利用params传值
        */
    }
    render(){
        return (
            <div>
                <h1>One组件</h1>
            </div>
        )
    }
}