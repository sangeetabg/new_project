import React, { Component } from 'react'
export class One extends Component {
  
  constructor() {
    super();
    this.state = {
      data: [],
      
    }
  }
  async componentDidMount() {
     let url = "https://reqres.in/api/unknown";
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({data:parseData.data })
  }
  render() {
    return (
      <div className='container mt-5 my-10'>
        
        <div className='row'>    
          {this.state.data.map((element) => (
           
                    <div className="col-md-3"  style={{ backgroundColor:element.color,margin:"20px", padding:"10px"}} key={element.id} >
                           <h1 style={{textAlign :"center",fontSize:"22px" ,textTransform:"capitalize" ,padding:"22px"}}>{element.name}</h1>
                           <h2 style={{textAlign :"center",fontSize:"20px",padding:"25px"}}>{element.year}</h2>
                    </div>            
          )
          )}         
        </div>
      </div>
    )
  }
}

export default One