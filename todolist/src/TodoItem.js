import React from 'react';

class TodoItem extends React.Component {
//Todolist为父组件，todoitem为子组件。父组件通过属性的方式向子组件传递参数，子组件通过props来接收父组件传递过来的参数
//子组件如果想和父组件通信，子组件要调用父组件传递过来的方法

handleDelete() {
	this.props.delete(this.props.index) //调用父组件向子组件传递的delete方法, 括号里表示同时把index传递给父组件的handledelete方法
}


render() {
  return( //用this.props.content代替TodoItem来接收输入的内容,content为属性
    <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>

  	) 
  }

}

export default TodoItem;