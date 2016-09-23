import React from 'react';
import { connect } from 'redux';

class TodoApp extends React.Component {

	constructor(){
		super();		
	}

	addTodoItem(e){
		const store = this.props.store;
		store.dispatch({
			type : 'ADD_TODO' ,
			text : e.target.value ,
			id : 1
		});

	}

	render() {
		return (
			<div>
				<input onClick ={this.addTodoIten.bind(this)} value="Add Todo" type="button" name ="TodoButton"/>
				<input type='text' name='todoInput' value=''/>
				<div>
					<ul>{
						this.props.todos.map( todo => {
							console.log(todo.text);							
							<li>{todo.text}</li>						
						})
					}
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
    return {
        todos:state.todos  
    };
}

function mapDispatchToProps(dispatch){
    return {
        addTodoItem : () => dispatch(addTodoAction)
      };
}

export default TodoApp  = connect (mapStateToProps, mapDispatchToProps) (TodoApp);