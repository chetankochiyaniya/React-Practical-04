import React from 'react';
import { useSelector } from 'react-redux';
import User from '../User/User';

function UserList() {
  const userDetails = useSelector((state) => state.userDetails)
  return (
    <>
      <div className='title'>
      <div className='name'>Name</div>
      <div className='status'>Status</div>
      <div className='access'>Access</div>
    </div>
      <div className='user-list-container'>
      { userDetails?.map((user) => {
      const {id} = user
      return(
        <User key={ id } user={ user } />        
      )
    })}
      </div>
    </>
  )
}

export default UserList;