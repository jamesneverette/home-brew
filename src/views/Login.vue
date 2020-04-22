<template>
    <div>
        <v-card class="mx-auto" style="max-width: 500px; width: 100%;" tile>
            <v-toolbar dark dense flat color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-text-field v-model="auth_email" class="mt-0" label="Email" name="Email" @keyup.enter="login" />
                <v-text-field v-model="auth_password" class="mt-0" label="Password" name="Password" type="password" @keyup.enter="login" />
                <v-card-actions class="px-0 pb-0">
                    <v-btn @click.prevent="login" :loading="is_logging_in ? true : false" color="primary" block>Login</v-btn>
                </v-card-actions>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { db } from '@/db'
import { mapActions, mapState, mapMutations } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    name: 'Login',
    data: () => ({
        auth_email: '',
        auth_password: '',
        is_logging_in: false
    }),
    methods: {
        login() {
            this.is_logging_in = true;

            firebase.auth().signInWithEmailAndPassword(this.auth_email, this.auth_password)
            .then(response => {
                
                db.collection('users')
                .doc(response.user.uid)
                .get()
                .then(snapshot => {
                    if (snapshot.exists) {
                        this.bind_user(response.user.uid).then((user) => {
                            this.is_logging_in = false;
                            this.$vuetify.theme.dark = user.settings.dark_theme;
                            //this.update_render_key();
                            this.$router.push({ name: 'Home' })
                        });
                        
                    } else {
                        this.is_logging_in = false;
                    }
                })
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                this.is_logging_in = false;
            });
        },

        ...mapActions([
            'bind_user'
        ]),

        ...mapMutations([
            'update_render_key'
        ])
    },
    computed: {
        ...mapState([
            'user'
        ])
    }
}
</script>