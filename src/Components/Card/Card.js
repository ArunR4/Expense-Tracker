import React from 'react'

import './card.css'
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/action/expenses';

function Card({item,notify}) {
  const time = moment(item.time).fromNow();
  const dispatch = useDispatch();

  const deleteHandler = ()=>{
    dispatch(deleteExpense(item));
    notify();
  }

  console.log(item.category)
  return (
    <div className='card'>
      <div className='card-img'><i class={item.category.icon}></i></div>
      <div className='card-info'>
        <p className='title'>{item.title}</p>
        <p className='time'>{time}</p>
      </div>
      <div className='card-right'>
        <div>
          <p className='card-amount'>₹ {item.amount}</p>
        </div>
        <div className='delete-icon' onClick={deleteHandler}>
          <i class="fi fi-rr-trash"></i>
        </div>
      </div>
    </div>

  )
}

export default Card