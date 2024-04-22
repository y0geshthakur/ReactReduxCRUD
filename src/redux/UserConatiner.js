import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchUsers} from "./customers/customerAction"

function UserConatiner(props) {
    useEffect(()=>{
        props.fetchUsers()
    },[])
  return props.userData.loading? (
    <h2>Loading...</h2>
  ) : props.userData.error? (
    <h2>{props.userData.error}</h2>
  ) : (
    <div>
        <h2>User</h2>
        <div>
            {props.userData.users.map(user=><p key={user.id}>{user.firstname} {user.lastname}</p>)}
        </div>
    </div>
  ) 
}

const mapStateToProps=(state)=>{
    return{
        userData:state.customers
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchUsers:()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserConatiner)
