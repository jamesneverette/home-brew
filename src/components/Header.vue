<template>
    <div>
        <v-app-bar dense flat clipped-left clipped-right fixed app>
            <v-toolbar-title>Home Brew</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu v-if="user" offset-y>
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
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            
        </v-app-bar>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Header',
    methods: {
        get_initials(str) {
            let arr = str.split(' ');
            return arr[0].charAt(0) + arr[1].charAt(0);
        }
    },
    computed: {
        ...mapState([
            'user'
        ])
    }
}
</script>