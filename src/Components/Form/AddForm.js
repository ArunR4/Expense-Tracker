import React, { useState } from 'react'
import { categories } from '../../Constanse/add-expense'
import { useDispatch } from 'react-redux';
import {addExpense} from '../../redux/action/expenses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import './AddForm.css';

function AddForm() {
  const cat = categories;
  const [user,setUser] = useState(false)
  const [toggle,setToggle] = useState(false)
  const [title,setTitle] = useState("")
  const [amount,setAmount] = useState('')
  const [selectItems,setSelect] = useState()
  const dispatch = useDispatch()

  const handleSelect = el =>{
    setSelect(el);
    setToggle(pre=>!pre)
  }

  const handleSubmit = ()=>{
    if(title === "" || amount === "" || !selectItems){ 
      const notify = () => toast("Please add values") 
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category:selectItems,
      time:new Date()
    }  
    dispatch(addExpense(data));
    const notify = () => toast("Data Added Successfully") 
    notify();
    setTimeout(() => {
      setUser(pre=>!pre)
    }, 1500);
  }

  return (
    <div className='add-form'>
      <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          theme="light"
      />
      <div className='form-item'>
        <label>Title  </label>
        <input placeholder='Give a name to your Expense' value={title} onChange={(e)=>setTitle(e.target.value)} />
      </div>
      <div className='form-item amount'>
      <label>Amount ₹</label>
      <input placeholder='Enter the Amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
      </div>
      <div className='select-container'>
        <div className='select'>
          <div className='dropdwon' onClick={()=>setToggle(pre=>!pre)}>
            <lable>Category</lable>
            <i class="fi fi-rr-angle-small-down"></i>
          </div>
          {toggle? <div className='cat-container'>
            {cat.map(el=>(
              <div key={el.id} onClick={()=>handleSelect(el)} className="cat-item">
                <lable>{el.title}</lable>
                <i class={el.icon}></i>
              </div>
            ))}
          </div> : null}
        </div>
      </div>
      <div className='form-add'>
        <div onClick={handleSubmit}>
          <lable>Add</lable>
          <i class="fi fi-rr-paper-plane"></i>
        </div>
      </div>
      {user && (<Navigate to='/' replace/>)}
    </div>
  )
}

export default AddForm
