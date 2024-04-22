import React,{Component} from "react"
import { connect } from "react-redux"
import { fetchUsers } from "./customers/customerAction"

export class CustomersContainer extends Component{
    componentDidMount(){
        this.props.fetchUsers()
    }
    render(){
        return this.props.userData.loading?(
            <h2>Loading..</h2>
        ): this.props.userData.error?(
            <h2>{this.props.userData.error}</h2>
        ):(
            <div>
                <h2>USER</h2>
                <div>
                    {
                        props.userData.users.map(user=><p key={user.id}>{user.first_name}</p>)
                    }
                </div>
            </div>
        )
    }
}