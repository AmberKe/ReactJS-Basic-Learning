import React from 'react';//引入react库，旨在浏览器理解react的语法
import ReactDOM from 'react-dom';// 加载一个组件，将其挂载至DOM节点上，渲染到页面之上
import './index.css';
import Todolist from './Todolist';//App即组件，React中大写字母开头的即为一个组件
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Todolist />, document.getElementById('root'));


serviceWorker.unregister();
