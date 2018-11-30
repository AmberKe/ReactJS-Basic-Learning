
function ListItem (props){
  return <li>{props.item}</li>
}

function ShoppingTitle (props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Total Number of Items is: {props.numItem}</h2>
    </div>
  )
}

function ShoppingList(props){
  return (
    <div>
      <h3>{props.subtitle}</h3>
      <ol>
        <ListItem item = {props.items[0]}/>
        <ListItem item = {props.items[1]} />
        <ListItem item = {props.items[2]}/>
      </ol>
    </div>
  )
}

function ShoppingApp (props){
  return (
    <div>
      <ShoppingTitle title = "My shopping list" numItem = "9"/>
      <ShoppingList subtitle = "Food" items = {["Apple","Bread","Cheese"]}/>
      <ShoppingList subtitle = "Clothes" items = {["Shirt","Pants","Hat"]}/>
      <ShoppingList subtitle = "Supplies" items ={["Pen","Paper","Glue"]}/>
    </div>
  )
}

ReactDOM.render(
  <ShoppingApp />,
  document.getElementById("root")
)
    