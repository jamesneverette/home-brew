<template>
    <div>
        <v-app-bar clipped-left clipped-right fixed app>
            <v-app-bar-nav-icon @click="update_navigation_drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Home Brew</v-toolbar-title>
            <v-spacer></v-spacer>
            
        </v-app-bar>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'Header',
    methods: {
        ...mapActions([
            'update_navigation_drawer'
        ])
    }
}
</script>