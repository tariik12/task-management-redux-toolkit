import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks:[
        {
            id: 1,
            status: 'pending',
            title: 'Yes Do',
            description: 'Give your won Task',
            date: '2023-10-23',
            assignedTo: 'Tarik',
            priority: 'high'
          }
        ],
        usersSpecificTasks:[]
}

const tasksSlice =createSlice ( {
   name:'tasksSlice',
   initialState,
   reducers:{
    addTask: (state,{payload}) =>{
        if(state.tasks.length === 0){

            state.tasks.push({id:1,status:'pending', ...payload})
        }else {
            const lastElement = state.tasks.at(-1);
            state.tasks.push({id:lastElement.id +1, status:'pending', ...payload})
        }
    },
    removeTask:(state, {payload}) =>{
       state.tasks= state.tasks.filter((item) =>item.id !== payload)
    },
    updateStatus:(state, {payload}) =>{
        const target = state.tasks.find((item) =>item.id === payload.id);
        target.status = payload.status
    },
    usersTasks:(state, {payload}) =>{
        state.usersSpecificTasks=state.tasks.filter((item) =>item.assignedTo == payload)
    }
   }
});
export const{addTask, updateStatus, removeTask, usersTasks} =tasksSlice.actions
export default tasksSlice.reducer;