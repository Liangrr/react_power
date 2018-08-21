import { ADD_DATA, DELETE_DATA } from './actionType';
const initState = {
    flag: 3,
    data: [
        {id: 1, val: 'a'},
        {id: 2, val: 'b'},
        {id: 3, val: 'c'}
    ]
}
export default function dataReducer(state = initState, action){
	
	if (action.type === ADD_DATA) {
//		深拷贝获得新的state,因为涉及多层拷贝,用JSON.parse,单层则可以用...或者Object.assign
		let newState = JSON.parse(JSON.stringify(state));
		newState.flag += 1;
		newState.data.push({
			id:newState.flag,
			val:action.value
		})
		return newState;
	}
	
	if (action.type === DELETE_DATA) {
		let newState = JSON.parse(JSON.stringify(state));
		newState.data.splice(action.index,1)
		return newState;
	}
	
	return state;
}
