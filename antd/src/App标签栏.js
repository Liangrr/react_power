import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home'
import Discover from './pages/Discover'

import { TabBar } from 'antd-mobile';

class App extends Component {
  constructor(props) {
    super(props);
    let tabItemData = [
        {title: '首页', id: 1, tab: 'homeTab', component: Home, badge: ''},
        {title: '发现', id: 2, tab: 'discoverTab', component: Discover, badge: '2'},
    ];
    this.state = {
      selectedTab: 'homeTab',
      hidden: false,
      tabItemData,
      content: tabItemData[0].component
    };
  }

  render() {
		let {tabItemData, content} = this.state;
    let Content = content;
    return (
      <div className='App'>
        <Content/>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
        {
        	tabItemData.map((item)=>{
        		return (
        			<TabBar.Item
                title={item.title}
                key={item.id}
                icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === item.tab}
                badge={item.badge}
                onPress={this.tabPressAction.bind(this, item.tab)}
            >
            </TabBar.Item>
        		)
        	})
        }
          
        </TabBar>
        
      </div>
    );
  }
	tabPressAction(tabName){
      console.log('点击了');
      let result = this.state.tabItemData.find(item=>{
          return item.tab === tabName;
      })

      console.log(result);

      this.setState({
        selectedTab: tabName,
        content: result.component
      });
  }
}

export default App;