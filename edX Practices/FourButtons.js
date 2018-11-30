class Details extends React.Component {
  render (){
    return <h1>{this.props.output}</h1>
  }
}

class Button extends React.Component {
  render (){
    return (
      <button style={{color: this.props.active? "red" : "blue"}} onClick={()=>{this.props.clickHandler(this.props.id,this.props.name)}}>{this.props.name}</button>
    )
  }
}

class App extends React.Component {
  constructor (props){
    super (props)
    this.state = {activeArray:[0,0,0,0], output:""} //activeArray数组的作用是？控制各个按钮开关的true or false
    this.clickHandler = this.clickHandler.bind(this) //为了优化代码，而不是一一在组件中绑定
  }
  
  clickHandler (id, name) {
     var arr = [0,0,0,0] 
     arr[id] = 1 //为什么值是1？这里是给数组元素赋值；1的布尔值为true，0为false，this.props.active条件语句基于此做相应执行
     this.setState({activeArray:arr,output:name})
     console.log(id,name)
  }
  
  render (){
    return (
      //设置ID以便知道点击了哪个按钮
      <div> 
        <Button name = "one" clickHandler = {this.clickHandler} id = "0" active = {this.state.activeArray[0]}/>
        <Button name = "two" clickHandler = {this.clickHandler} id = "1" active = {this.state.activeArray[1]} />
        <Button name = "three" clickHandler = {this.clickHandler} id = "2" active = {this.state.activeArray[2]} />
        <Button name = "four" clickHandler = {this.clickHandler} id = "3" active = {this.state.activeArray[3]} />
        <Details output = {this.state.output}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById ('root')
)