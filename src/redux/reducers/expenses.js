import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-type/expenses";

const initialList = () =>{
    const list = localStorage.getItem("expense-list");
    let expenses = [];
    if(list){
        expenses=JSON.parse(list);
    }
    return expenses;
}
const initialState = {
    expenseList: initialList(),
    query:""
}

export const expenseReducer = (state=initialState, action)=>{
    switch (action.type){
        case ADD_EXPENSE:{
            localStorage.setItem("expense-list",JSON.stringify([...state.expenseList,action.data]))
            return{
                ...state,
                expenseList:[...state.expenseList,action.data]
            }
        }
        case DELETE_EXPENSE:{
            const {data} = action;
            const tempList = state.expenseList.filter(item=>(
                item.time!==data.time
            ))
            localStorage.setItem("expense-list",JSON.stringify(tempList))
            return{
                ...state,
                expenseList:tempList
            }
        }
        case SEARCH_EXPENSE:{
            const {query} = action;
            return{
                ...state,
                query
            }
        }
        default:
            return state;
    }
}