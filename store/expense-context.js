import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of balls ',
        amount : 45,
        date: new Date('2023-11-06')
    },
    {
        id: 'e2',
        description: 'A pair of socks ',
        amount : 75,
        date: new Date('2024-02-18')
    },
    {
        id: 'e3',
        description: 'A pair of hooks ',
        amount : 65,
        date: new Date('2023-02-23')
    },
    {
        id: 'e4',
        description: 'A bucket ',
        amount : 98,
        date: new Date('2020-01-26')
    },
    {
        id: 'e5',
        description: 'A Coffe Mug',
        amount : 750,
        date: new Date('2024-02-20')
    },
    {
        id: 'e6',
        description: 'A pair of balls ',
        amount : 45,
        date: new Date('2023-11-06')
    },
    {
        id: 'e7',
        description: 'A pair of socks ',
        amount : 75,
        date: new Date('2022-11-06')
    },
    {
        id: 'e8',
        description: 'Buy udemy course ',
        amount : 65,
        date: new Date('2024-02-20')
    },
    {
        id: 'e9',
        description: 'A bucket ',
        amount : 98,
        date: new Date('2020-01-26')
    },
    {
        id: 'e10',
        description: 'A Coffe Mug',
        amount : 750,
        date: new Date('2024-01-06')
    },
];

export const ExpensesContext =createContext({
    expenses:[],
    addExpense:({description, amount, date}) => {},
    deleteExpense :(id) => {},
    updateExpense :(id,{description, amount, date}) => {},

});

function expensesReducer(state,action){
    switch (action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return[{...action.payload, id: id},...state];
            case 'UPDATE':
                const updatableExpenseIndex= state.findIndex(
                    (expense) => expense.id === action.payload.id);
                    const updatableExpense= state[updatableExpenseIndex];
                    const updatedItem={ ...updatableExpense,...action.payload.data};
                    const updatedExpenses=[...state];
                    updatedExpenses[updatableExpenseIndex]=updatedItem;
                    return updatedExpenses;
                case 'DELETE':
                    return state.filter((expense) => expense.id !== action.payload)
        default:
            return state;            
    }
}

function ExpensesContextProvider({children}){
const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

function addExpense(expenseData){
    dispatch({type:'ADD', payload: expenseData});
}

function deleteExpense(id){
    dispatch({type:'DELETE',payload: id});
}

function updateExpense(id,expenseData){
    dispatch({type:"UPDATE", payload:{id:id, data: expenseData}});
}

const value = {
    expenses:  expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense:updateExpense
};

return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;