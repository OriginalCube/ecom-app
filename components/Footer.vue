<template>
	<footer
		class="h-16 w-full p-4 flex items-center justify-around fixed bg-secondary rounded-t-md bottom-0"
	>
		<FooterNavigation
			v-for="item in navigation"
			:key="item.label"
			:icon="item.icon"
			:label="item.label"
		/>
	</footer>
</template>

<script lang="ts" setup>
const navigation = [
	{ icon: 'tabler:home', label: 'Home' },
	{ icon: 'tabler:user', label: 'Profile' },
	{ icon: 'tabler:settings', label: 'Settings' },
]
</script>
