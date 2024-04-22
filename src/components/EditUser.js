import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from './withRouter'

export class EditUser extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
      
        this.state = {
          _id: '',
           id: '',
           first_name: '',
           last_name: '',
           gender: '',      
           age: ''
        }
      }  
    
    
     async componentDidMount() {       
        try {
          let search =  this.props.match.params.id,
          fetchid = search.substring(1, search.length);                      
          
          const res = await fetch ( `http://localhost:5000/customers/${fetchid}`);
          const json = await res.json();
          console.log(json);
          const { _id, id, first_name, last_name, gender, age } = json;                      
          this.setState({ _id, id, first_name, last_name, gender, age });
                
          this.inputRef.current.focus()        
        } catch (err) {
          this.setState({ response: "Customer not found!" })
        }
        
      };
    
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
        
    submitHandler = async e =>{
      e.preventDefault();
      try{
        const res = await axios.put(`http://localhost:5000/customers/${this.state._id}`, this.state)
        console.log(res); 
        this.props.navigate('/customers')
      } catch (error) {
          console.log(error);
      }
      
    }
    
      render() {
        return (
          <form onSubmit={this.submitHandler}>
              <div>
                  <label>ID</label>
                  <input
                    type="text"
                    name="id"
                    onChange={this.changeHandler}
                    value={this.state.id}
                    ref = {this.inputRef}
                  >
                  </input>
              </div>
              <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    onChange={this.changeHandler}
                    value={this.state.first_name}
                    ref = {this.inputRef}
                  >
                  </input>
              </div>
              <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    onChange={this.changeHandler}
                    value={this.state.last_name}
                    ref = {this.inputRef}
                  >
                  </input>
              </div>
              <div>
                  <label>Gender</label>
                  <input
                    type="text"
                    name="gender"
                    onChange={this.changeHandler}
                    value={this.state.gender}
                    ref = {this.inputRef}
                  >
                  </input>
              </div>
              <div>
              <label>Age</label>
              <input
                type="text"
                name="age"
                onChange={this.changeHandler}
                value={this.state.age}
                ref = {this.inputRef}
              >
              </input>
          </div>
              <button type="submit">Submit</button>
          </form>
        )
      }
}

export default withRouter(EditUser)