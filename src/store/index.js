import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		navigation_drawer: true
	},
	mutations: {
		update_navigation_drawer (state, payload) {
			if (payload !== undefined && typeof payload === "boolean") {
                state.navigation_drawer = payload;
                return;
            }

            state.navigation_drawer = !state.navigation_drawer
		}
	},
	actions: {
		update_navigation_drawer (store, is_open) {
			store.commit('update_navigation_drawer', is_open);
		}
	},
	modules: {
	}
})
