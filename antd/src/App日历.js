import React, { Component } from 'react';
import './App.css';
import { List, Calendar } from 'antd-mobile';


const extra = {
  '2017/07/15': { info: 'Disable', disable: true },
};

const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };

Object.keys(extra).forEach((key) => {
  const info = extra[key];
  const date = new Date(key);
  if (!Number.isNaN(+date) && !extra[+date]) {
    extra[+date] = info;
  }
});

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      en: false,
      show: false,
      config: {},
    };
    this.originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;
    
    this.changeLanguage = this.changeLanguage.bind(this);
    this.onSelectHasDisableDate = this.onSelectHasDisableDate.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
	changeLanguage(){
    this.setState({
      en:!this.state.en
    });
  }
  onSelectHasDisableDate(dates){
    console.warn('onSelectHasDisableDate', dates);
  }

  onConfirm(startTime, endTime){
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime,
      endTime,
    });
  }

  onCancel(){
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime: undefined,
      endTime: undefined,
    });
  }
  getDateExtra(date){
  	return extra[+date];
  }
	render() {
    return (
      <div>
        <List className="calendar-list" style={{ backgroundColor: 'white' }}>

          {this.renderBtn('选择日期', 'Select Date', { type: 'one' })}
          {
            this.state.startTime &&
            <List.Item>Time1: {this.state.startTime.toLocaleString()}</List.Item>
          }
          {
            this.state.endTime &&
            <List.Item>Time2: {this.state.endTime.toLocaleString()}</List.Item>
          }
        </List>
        <Calendar
          {...this.state.config}
          visible={this.state.show}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          onSelectHasDisableDate={this.onSelectHasDisableDate}
          getDateExtra={this.getDateExtra}
          defaultDate={now}
          minDate={new Date(+now - 5184000000)}
          maxDate={new Date(+now + 31536000000)}
        />
      </div>
    );
	}
  renderBtn(zh, en, config = {}) {
    return (
      <div className="App">
        <List.Item arrow="horizontal"
	        onClick={() => {
	          document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
	          this.setState({
	            show: true,
	            config,
	          });
	        }}
	      >
	        {this.state.en ? en : zh}
	      </List.Item>
      </div>
    );
  }
}

export default App;
