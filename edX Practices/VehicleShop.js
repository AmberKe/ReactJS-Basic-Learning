function WelcomeBanner (){
  return (
    <div>
      <h2>Welcome to React Transportation</h2>
      <h3>The best place to buy vehicles online!</h3>
    </div>
  )
}

function OptionsFilter (){
  return (
    <div>
      <h2>Choose Options</h2>
      <form>
        <label>New Only<input name="New Only" type="checkbox" value="" checked/></label><br/><br/>
        <label>Select Type</label>
          <select>
            <option value="All" selected="selected">All</option>
            <option value="Cars">Cars</option>
            <option value="Trucks">Trucks</option>
            <option value="Convertibles">Convertibles</option>
          </select>   
      </form>
    </div>
  )
}

function AllData (props){
  return (
    <div>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>{props.year}</td>
          <td>{props.model}</td>
          <td>{props.price}</td>
          <td><button type="submit">Buy Now</button></td>
        </tr>
      </table>
    </div>
  )
}

function TranCars (props){
  return (
    <div>
      <h3>Cars</h3>
      <AllData year="2013" model="A" price="$32000" />
      <AllData year="2011" model="B" price="$4400" />
      <AllData year="2016" model="B" price="$15500" />
    </div>
  )
}

function TranTrucks (props){
  return (
    <div>
      <h3>Trucks</h3>
      <AllData year="2014" model="D" price="$18000" />
      <AllData year="2013" model="E" price="$5200" />
    </div>
  )
}

function Tranvertibles (props){
  return (
    <div>
      <h3>Convertibles</h3>
      <AllData year="2009" model="F" price="$2000" />
      <AllData year="2010" model="G" price="$6000" />
      <AllData year="2012" model="H" price="$12500" />
      <AllData year="2017" model="M" price="$50000" />
    </div>
  )
}

function Transportation (props){
  return (
    <div>
      <WelcomeBanner />
      <OptionsFilter />
      <TranCars />
      <TranTrucks />
      <Tranvertibles />
    </div>
  )
}

ReactDOM.render(
  <Transportation />,
  document.getElementById("root")
)
    