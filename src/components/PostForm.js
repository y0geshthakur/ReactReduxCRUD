import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from './withRouter'

export class PostForm extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  
    this.state = {
       id: '',
       first_name: '',
       last_name: '',
       gender: ''  ,    
       age: ''
    }
  }

componentDidMount() { 
  this.inputRef.current.focus()  
 }

changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value})
}

submitHandler = async e =>{
  e.preventDefault();
  try{
    const res = await axios.post('http://localhost:5000/customers', this.state)
    console.log(res); 
  } catch (error) {
      console.log(error);
  }
  this.props.navigate('/customers') 
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

export default withRouter(PostForm)