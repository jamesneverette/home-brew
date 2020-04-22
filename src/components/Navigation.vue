<template>
    <div>
        <v-navigation-drawer clipped app permanent expand-on-hover>
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
                route_name: 'Home'
            },
            {
                id: 1,
                icon: 'mdi-beer',
                title: 'Beers',
                route_name: 'Beers'
            },
            {
                id: 2,
                icon: 'mdi-format-list-bulleted',
                title: 'Recipes',
                route_name: 'Recipes'
            },
            {
                id: 3,
                icon: 'mdi-cog-outline',
                title: 'User Settings',
                route_name: 'User Settings'
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