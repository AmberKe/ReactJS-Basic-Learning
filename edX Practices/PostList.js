function PostButton(props){
    var style = {
        width:24,
        height:24
    }
    return (
        <button style = {style} onClick = {() => props.handleClick()}>{props.label}</button>
    )
}

function PostText (props){
  var style = {
    border: '1px solid black',
    width: props.width
  }
  return ( 
    <div style = {style}> {props.text} </div>
  )
}

function Post (props){
  var style = {
    display: 'flex'
  }
  return (
    <div style = {style}>
      <PostButton label = "x" handleClick = {props.removeItem}/>
      <PostText text = {props.title} width = "200"/>
      <PostButton label = "+" handleClick = {props.incrementScore}/>
      <PostText text = {props.score} width = "20"/>
      <PostButton label = "-" handleClick = {props.decrementScore}/>
    </div>
  )    
}

function PostList (props) {
  return (
    <ol>
      {props.postList.map((item,index) => 
           <Post 
             key = {index} 
             title = {item.title} 
             score = {item.score} 
             incrementScore = {() => props.updateScore(index,1)}
             decrementScore = {() => props.updateScore(index,-1)}
             removeItem = {() => props.removeItem(index)}
           /> )}
    </ol>
  )
}

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = { value:"",items: []}
  }
  
  handleChange (event) {
    this.setState ({ value:event.target.value })
  }
  
  addItem () {
    var itemsCopy = this.state.items.slice() //slice方法从已有数组中返回选定的元素，空参数则表示选取全部，不会改变原数组；这里的作用是复制数组
    var truncatedString = this.state.value.substring(0,20); //substring方法用于截取指定下标之间的字符串
    itemsCopy.push({"title":truncatedString,"score":0})
    itemsCopy.sort((a,b)=>{ //sort方法对数组元素进行排序,return后的即是排序方法
      return b.score - a.score;
    })
    this.setState({items:itemsCopy,value:""})
  }
  
  updateScore(index,val){
    var itemsCopy = this.state.items.slice()
    itemsCopy[index].score += val
    itemsCopy.sort((a,b) => {
        return b.score - a.score
    })
    this.setState({items:itemsCopy})
  }
  
  removeItem (index){
    var itemsCopy = this.state.items.slice(）
    itemsCopy.splice(index,1) //删除对应下标的元素
    console.log(this.state.items)
    itemsCopy.sort((a,b) => {
        return b.score - a.score
    })
    this.setState({items: itemsCopy})
  }
  
  render (){
    return ( //()=>this.addItem()跟写this.addItem.bind(this)的区别？没有区别，都是绑定方法，爱用哪个用哪个
      <div>
        <input value = {this.state.value} onChange = {this.handleChange.bind(this)}/>
        <button onClick = {() => this.addItem()}> Submit</button> 
        <PostList postList = {this.state.items}
                  updateScore = {this.updateScore.bind(this)}
                  removeItem = {this.removeItem.bind(this)}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
