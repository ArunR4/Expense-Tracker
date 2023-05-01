import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Topfold.css';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/action/expenses';

function Topfold() {

    const [query,setQuery] = useState('');
    const dispatch = useDispatch();

    const handleQuery = (e) =>{
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value))
    }

  return (
    <div className='Topfold'>
        {window.location.pathname === '/' ? 
        <div className='home-topfold'>
            <div className='search-bar'>
                <input 
                    placeholder='Search for expenses' 
                    value={query}
                    onChange={handleQuery}
                />
                <i class="fi fi-rr-search"></i>
            </div>
            <Link to='/add-expense'><div className='add-button'>
            <i class="fi fi-rr-add"></i>
            <label className='lable'>Add</label>
            </div></Link> 
        </div> 
        : 
        <div className='add-top'>
            <Link to="/">
            <div className='add-top-button'>
            <i class="fi fi-rr-arrow-small-left"></i>
            <label className='lable'>Back</label>
            </div>
            </Link>
            <Link to="/">
            <div className='add-top-button'>
            <i class="fi fi-rr-cross-circle"></i>
            <label className='lable'>Cancel</label>
            </div>
            </Link>
        </div>
        }
    </div>
  )
}

export default Topfold