export const INPUT_CHANGE = 'input_change'
export const ADD_DATA = 'add-data';
export const DELETE_DATA = 'delete-data';
export const inputChangeAction = (value)=>{
    return {
        type:INPUT_CHANGE,
        value
    }
}
export const addAction = ()=>{
    return {
        type: ADD_DATA,

    }
}

export const deleteAction = (index)=>{
    return {
        type: DELETE_DATA,
        index
    }
}