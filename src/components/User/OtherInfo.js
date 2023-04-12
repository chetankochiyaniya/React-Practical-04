import React from 'react';
import { Lock, Trash2 } from 'react-feather';
import './User.css';

function OtherInfo({user}) {
  const { id } = user
  // conditional rendering for owner & user
  return (
  <>
    <div className='user-status'>
      { 
        id === 1 ? 
          <div className='user-owner-status'>Active</div> : 
          <select id="status" name="status">
            <option value="Inactive">Inactive</option>
            <option value="Active">Active</option>
          </select>
      }
    </div>
    <div className='user-access'>
      {
        id === 1 ?
        <div className='user-owner-access'>Owner</div> :
        <select id="access" name="access">
          <option value="manager">Manager</option>
          <option value="read">Read</option>
        </select>
      }
    </div>
    <div className='icon'>
      { 
        id === 1 ?
        <Lock size={20} onClick={() => alert('Owner can\'t be removed.')}/> :
        <Trash2 size={20} />     
      }
    </div>
  </>
  )
}

export default OtherInfo;