import React, { Component } from 'react';
import TodoItem from './TodoItem';
import logo from './logo.svg';
import './App.css';
// 以下代码定义了一个React组件
class Todolist extends Component {  //定义了一个叫App的类（组件），继承于component类。
 
  constructor(props) {  //props为任意的输入值
    super(props); //super初始化
    this.state = {
      list: [],
      inputValue:'' 
    }
  } //todolist组件一创建时，constructor这个构造函数就会自动被执行，就在组件里创建了一个state的数据项，用来存放各项数据内容


  handleBtnClick() {
    if(this.state.inputValue) { //用if语句过滤掉输入框无内容而点击add会增加一条空li的情况
      this.setState({  //button click事件触发后，setstate往list里增加了[]中的内容
        list: [...this.state.list, this.state.inputValue],  //这里实现了将输入框的内容添加到list，且内容一致
        inputValue: ''  //这一步是在点击按钮的同时，把输入框的内容清空
      })
    }
  }

  handleInputChange(e) {  //当在input框输入内容时，inputchange就会执行，会接收到一个对象e改变inputvalue
    this.setState({
      inputValue: e.target.value  //inputvalue就变成输入的内容
    })
  }

   /*handleItemclick(index) {
    const list = [...this.state.list]; //这里是对handleBtnClick中的this.state.list进行复制，在副本上进行操作
    list.splice(index,1); //splice语法第二个参数表示操作时删除几个
    this.setState({
      list: list  //在ES6中，键名与键值相同时，也可只写一个list
    })
  }
    /*this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list
    })这里也可以用这种写法。但在react中要操作state里面的数据，尽量不要直接去改它，而通过复制的方式操作副本，这样代码的性能和可调试性会更好*/

handleDelete(index) { //这里的index即为子组件传递过来的index
  const list = [...this.state.list];
  list.splice(index,1); 
  this.setState({
    list: list
  })  
}  //这里由于拆分出子组件了，所以原来的handleitemclick方法内容放在这里即可

//React组件中必须要有render函数，负责组件要显示的内容（return后的东西）
  render() {
    return ( 
      //JSX语法：HTML语言(以<开头的各种标签)可以直接写在JS语言(以{开头的语句，注意是语句而非表达式!)之中.
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>add</button> 
        </div>
        <ul>
          {
            this.state.list.map((item, index) => { //map是对数组做循环的函数，第一个参数表示输入的内容
              return <TodoItem delete={this.handleDelete.bind(this)} key={index} content={item} index={index}/> //这里的TodoItem是指子组件;content参数表示向todoitem传递item内容，告诉它要显示什么内容;index表示子组件对应的下标；delete为一个方法，这些东西都需要传递给子组件

              //return <li key={index} onClick={this.handleItemclick.bind(this,index)}>{item}</li>,因为把标签拆分成一个单独的todoitem组件了，所以改为上行代码
            })
          }
        </ul>
      </div>
    );
  }
}



export default Todolist; 
