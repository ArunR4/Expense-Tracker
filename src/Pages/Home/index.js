import React from 'react'

import './home.css';
import Topfold from '../../Components/TopFold/Topfold';
import ExpenseList from '../../Components/ExpenseList/ExpenseList';

function Home() {
  return (
    <div className='home'>
      <Topfold />
      <ExpenseList />
    </div>
  )
}

export default Home