import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mouseEnter, mouseLeave } from '../../redux/actions';
import OtherInfo from './OtherInfo';
import './User.css';

function User({user}) {

  const dispatch = useDispatch();

  useEffect(() => {
    const onResize = () => {
      dispatch({ type: "SCREEN_RESIZE", screenWidth: window.innerWidth });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [dispatch]);
  
  const screenSize = useSelector((state) => state.screenReducer.screenWidth)
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
    <div className={screenSize < 850 ? 'user-sm-container' : 'user-container' } >
      
    <div className='user-info' onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
      <div className='user-avatar'>
        <img src={ avatar } alt='user-avatar'/>
      </div>
      <div className='user-details'>
        <div className='user-name'>{ first_name } { last_name }</div>
        <div className='user-email'>{ email }</div>
      </div>
    </div>  

      {
        screenSize < 850 ?
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