<template>
	<v-app :key="render_key">
		<Header />
		<Navigation />
		<v-content>
			<transition name="fade" mode="out-in" >
                <router-view class="pa-2"></router-view>
            </transition>
		</v-content>
	</v-app>
</template>

<script>
	import { mapState } from 'vuex'
	import Header from './components/Header.vue'
	import Navigation from './components/Navigation.vue'

	export default {
		name: 'App',
		components: {
			Header,
			Navigation
		},
		computed: {
			...mapState([
				'render_key'
			])
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
