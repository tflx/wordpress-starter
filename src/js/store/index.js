import Store from './store.ts';
import actions from './actions.js';
import mutations from './mutations.js';
import state from './initialstate.js';


export default new Store({
    actions,
    mutations,
    state
});