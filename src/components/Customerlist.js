import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from './withRouter'

export class Customerlist extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         customers: [],
         searchTerm: ""
        
      }
    }

     async componentDidMount() { 
        try {
            const res = await fetch(`http://localhost:5000/customers`);
            const json = await res.json();
            this.setState({ customers: json });
          } catch (error) {
            console.error('Error fetching data:', error);
          }          
      }

      deleteHandler = async id => {
        try{             
            const resp = await axios.delete('http://localhost:5000/customers/'+id)
            console.log(resp.data)
            this.setState({
                customers: this.state.customers.filter((resp)=>{
                    if(!resp._id.includes(id)){
                        return resp
                    }
                })
            })
        } catch (error) {
            console.log('Error fetching data:', error);
        }       
     }    

     editHandler = id => {       
        this.props.navigate('/edit-customer/:'+id)        
     }

     renderTableData() {
         return this.state.customers.map((customer, index) => {
             const { _id, id, first_name, last_name, gender, age } = customer //destructuring array
            
             if(this.state.searchTerm === "" ||
             first_name.toLowerCase().includes(
                this.state.searchTerm.toLowerCase())){
                    return (
                        
                        <tr key={_id}>
                            {/* <td>{id}</td> */}
                            <td>{first_name}</td>
                            <td>{last_name}</td>
                            <td>{gender}</td>
                            <td>{age}</td>
                            <td><button onClick={() => this.editHandler(_id)}>Edit</button></td>
                            <td><button onClick={() => this.deleteHandler(_id)}>Delete</button></td>
                        </tr>
                    )
                }
         })
     }

     searchText(searchTerm) {
         this.setState({
             searchTerm : searchTerm
         })
     }

  render() {
    return (
      <div>
          <input type="text" placeholder='Search...'
          onChange={(event) => this.searchText(event.target.value)}/>
          <br></br>
          <br></br>
          <table id='customers' border={1} align='center'>
              <tbody >
                  {this.renderTableData()}
              </tbody>
          </table>
      </div>
    )
  }
}

export default withRouter(Customerlist)

