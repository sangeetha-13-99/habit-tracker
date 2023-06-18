import {habitArray} from "../db/habitData"

export const habitReducer=(state,action)=>{
    switch (action.type) {
        case 'ADDHABIT':{
            return {...state,habits:[...state.habits,action.payload.habit]};
        }
        case 'EDITHABIT':{
            const isArchivedHabit=state.archive.find(habit=>habit._id===action.payload.habit._id);
            const EditedhabitsData=state.habits.map(habit=>{
                if(habit._id===action.payload.habit._id){
                    return action.payload.habit
                }
                return habit
            })
            if(isArchivedHabit){
                return {...state,archive:EditedhabitsData};
            }
            return {...state,habits:EditedhabitsData};
        }
        case 'DELETEHABIT':{
            const isArchivedHabit=state.archive.find(habit=>habit._id===action.payload.id);
            if(isArchivedHabit){
                const DeletedhabitsData=state.archive.filter(habit=>habit._id!==action.payload.id);
                return {...state,archive:DeletedhabitsData};
            }else{
                const DeletedhabitsData=state.habits.filter(habit=>habit._id!==action.payload.id)
                return {...state,habits:DeletedhabitsData};
            }
        }
        case 'ARCHIVEHABIT':{
            const habitsData=state.habits.filter(habit=>habit._id!==action.payload.id);
            const archivedHabits=[...state.archive,action.payload.habit];
            return {...state,habits:habitsData,archive:archivedHabits}
        }
        case 'UNARCHIVEHABIT':{
            const archivedHabitsData=state.archive.filter(habit=>habit._id!==action.payload.id);
            const habitsData=[...state.habits,action.payload.habit];
            return {...state,habits:habitsData,archive:archivedHabitsData};
        }
        default:
            break;
    }
}

export const intialHabitData={
    habits:habitArray,
    archive:[]
}