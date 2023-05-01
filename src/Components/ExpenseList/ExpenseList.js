import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './list.css';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

function ExpenseList() {
    const {expenseList:list, query} = useSelector(state=>state.expenses);
    const filteredList = list.filter(item=>item.title.includes(query))
    const notify = () => toast.success("Data Deleted Successfully");

  return (
    <div className='expenseList'>
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          theme="light"
      />
        {filteredList.length?(
            filteredList.map(el=>(
                <Card item={el} notify={notify}/>
            ))
        ):
        <div className='emt-state'>
          <img src={require('../../assets/expense.png')} alt="Empty List" className='emt-image'/>
          <lable>Your expense is Empty</lable>  
        </div>}
    </div>
  )
}

export default ExpenseList