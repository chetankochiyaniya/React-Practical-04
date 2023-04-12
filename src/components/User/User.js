import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mouseEnter, mouseLeave } from '../../redux/actions';
import OtherInfo from './OtherInfo';
import './User.css';

function User({user}) {

  const dispatch = useDispatch();
  const [screen,setScreen] = useState(window.innerWidth)


  useEffect(() => {
    const onResize = () => {
      setScreen(window.innerWidth)
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [screen]);
  
  const { email, first_name, last_name, avatar} = user
  
  // for hovering effect & displaying card data accordingly
  function handleMouseEnter() {
    dispatch(mouseEnter(user));
  }
  function handleMouseLeave() {
    dispatch(mouseLeave(user));
  }


  return (
  <>
    <div className={screen< 850 ? 'user-sm-container' : 'user-container' } >
      
    <div className='user-info' onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave } onTouchStartCapture={handleMouseEnter} onTouchEndCapture={handleMouseLeave}>
      <div className='user-avatar'>
        <img src={ avatar } alt='user-avatar'/>
      </div>
      <div className='user-details'>
        <div className='user-name'>{ first_name } { last_name }</div>
        <div className='user-email'>{ email }</div>
      </div>
    </div>  

      {
        screen< 850 ?
        <div className='other-info'>
          <OtherInfo user={user} />
        </div> :
        <OtherInfo user={user}/>    
      }
    </div>
  </>
  )
}

export default User;