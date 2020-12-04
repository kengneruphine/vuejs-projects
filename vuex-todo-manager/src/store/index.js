//acts as the entering point and it will contain all our modules
import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';


//load Vuex
Vue.use(Vuex);

//Create our Store
export default new Vuex.Store({
    modules: {
        todos
    }
});