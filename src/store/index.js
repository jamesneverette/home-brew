import Vue from 'vue'
import Vuex from 'vuex'
import vuetify from '../plugins/vuetify'
import firebase from 'firebase/app'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '../db'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		recipes: [],
		render_key: Date.now(),
		user: null
	},
	mutations: {
		...vuexfireMutations
	},
	actions: {
		bindRecipes: firestoreAction(({ bindFirestoreRef }) => {
			return bindFirestoreRef('recipes', db.collection('recipes'))
		}),
		bind_user: firestoreAction(({ bindFirestoreRef }, uid) => {
            return bindFirestoreRef('user', db.collection('users').doc(uid))
        }),
		init (store) {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    this.dispatch('bind_user', user.uid).then((user) => {
                        vuetify.framework.theme.dark = user.settings.dark_theme;
                        store.commit('update_render_key');
                    });
                }
            });
		},
		unbind_user: firestoreAction(({ unbindFirestoreRef }) => {
            unbindFirestoreRef('user')
        })
	},
	getters: {
		is_authenticated: state => {
			if (state.user) {
				return true;
			}

			return false;
		}
	}
})
