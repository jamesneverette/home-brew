<template>
    <div>
        <v-app-bar dense flat clipped-left clipped-right fixed app>
            <v-icon class="mr-2">mdi-beer</v-icon>
            <v-toolbar-title>HomeBrew</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu v-if="user" :close-on-content-click="false" min-width="300" offset-y>
                <template v-slot:activator="{ on }">
                        <v-btn v-on="on" icon>
                            <v-avatar color="#fff" size="36">
                                <img v-if="user.avatar" :src="user.avatar" :alt="user.name">
                                <span v-else class="primary--text title" v-text="get_initials(user.name)"></span>
                            </v-avatar>
                        </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>{{ user.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-divider />
                <v-list>
                    <v-list-item>
                        <v-switch v-model="user.settings.dark_theme"  @click.prevent="update_dark_theme" label="Go Dark" />
                    </v-list-item>
                    <v-list-item @click="logout">
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
        </v-app-bar>
    </div>
</template>

<script>
import { db } from '@/db'
import firebase from 'firebase/app'
import 'firebase/auth'
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Header',
    methods: {
        ...mapActions([
            'unbind_user'
        ]),
        get_initials(str) {
            let arr = str.split(' ');
            return arr[0].charAt(0) + arr[1].charAt(0);
        },
        logout() {
            const $this = this;
            firebase.auth().signOut().then(function() {
                $this.unbind_user();
                $this.$vuetify.theme.dark = false;
                $this.$router.push({ name: 'Login' })
            }).catch(function(error) {
                console.log(error);
            });
        },
         update_dark_theme() {
            const dark_theme = this.user.settings.dark_theme;
            db.collection('users')
                .doc(this.user.uid)
                .update({ 'settings.dark_theme': dark_theme });
            this.$vuetify.theme.dark = dark_theme;
        }
    },
    computed: {
        ...mapState([
            'user'
        ])
    }
}
</script>