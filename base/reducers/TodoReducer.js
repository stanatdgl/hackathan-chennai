
export  const todos = (state =[], action) =>{
	switch (action.type){
	case 'ADD_TODO':
		return [
				...state, 
				{ 
					id: action.id,
					text : action.text,
					completed : false
				}
			];
	default :
		return state;
	}
};

export const addTodoAction = (item ) => {
	store.dispatch({
			type : 'ADD_TODO' ,
			text : e.target.value ,
			id : 1
	});
};