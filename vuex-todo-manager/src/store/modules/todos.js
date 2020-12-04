//this file will have our states, getters, actions and mutation
import axios from 'axios';

const state = {
    todos:[]
}

const getters = {   //get values from the states to be display in the component

    allTodos: state =>state.todos   //function that return all todos
}  

const actions = {  //make the request, get the response, call the mutation

    async fetchTodos({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        
        commit('setTodos', response.data);  //passing data to the mutation. 
                                          //commit takes in the mutation and the data to be set   
    },

    async addTodo({commit}, title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });

        commit('newTodo',response.data)
    },

    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('removeTodo',id)
    },

    async filterTodos({ commit},e) {
        //Get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);

        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

        commit('setTodos',response.data)
    },

    async updateTodo({ commit},updTodo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo);
        console.log(response.data)
        commit('updateTodo', response.data);
    }

    
}

const mutations = {  //mutation are used for mutating the state

    setTodos: (state, todos) => (state.todos = todos),
    
    newTodo: (state, todo) => state.todos.unshift(todo),

    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id)
        if (index != -1) {
            state.todos.splice(index, 1, updTodo); 
        }
    }


}

export default {
    state,
    getters,
    actions,
    mutations
}