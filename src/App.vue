<template>
	<v-app>
		<Header />
		<Navigation v-if="is_authenticated" />
		<v-content>
			<transition name="fade" mode="out-in" >
                <router-view class="pa-2"></router-view>
            </transition>
		</v-content>
	</v-app>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import Header from './components/Header.vue'
	import Navigation from './components/Navigation.vue'

	export default {
		name: 'App',
		components: {
			Header,
			Navigation
		},
		methods: {
			...mapActions([
				'init'
			])
		},
		computed: {
			...mapGetters([
				'is_authenticated'
			])
		},
		created() {
			this.init();
		}
	};
</script>

<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
