<template>
    <div>
        <v-navigation-drawer v-model="navigation_drawer" clipped app>
			<v-list nav dense>
				<v-list-item v-for="item in navigation_items" :key="item.id" :to="{ name: item.route_name }">
					<v-list-item-icon>
						<v-icon>{{item.icon}}</v-icon>
					</v-list-item-icon>
					<v-list-item-title>{{item.title}}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Navigation',
    data: () => ({
        navigation_items: [
            {
                id: 0,
                icon: 'mdi-home',
                title: 'Home',
                route_name: 'home'
            },
            {
                id: 1,
                icon: 'mdi-beer',
                title: 'Beers',
                route_name: 'beers'
            },
            {
                id: 2,
                icon: 'mdi-cog-outline',
                title: 'Settings',
                route_name: 'settings'
            }
        ]
    }),
    computed: {
        ...mapState([
            'navigation_drawer'
        ])
    }
}
</script>