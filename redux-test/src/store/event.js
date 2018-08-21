import {ADD_DATA,DELETE_DATA} from './actionType.js'

export const addAction = (value)=>{
	
    return {
        type: ADD_DATA,
        value
    }
}

export const deleteAction = (index)=>{
    return {
        type: DELETE_DATA,
        index
    }
}