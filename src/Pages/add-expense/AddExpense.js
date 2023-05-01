import React from 'react'

import './add.css';
import Topfold from '../../Components/TopFold/Topfold'
import AddForm from '../../Components/Form/AddForm';

function AddExpense() {
  return (
    <div className='add-expense'>
        <Topfold/>
        <AddForm/>
    </div>
  )
}

export default AddExpense