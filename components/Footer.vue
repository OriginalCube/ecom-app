<template>
	<footer
		class="fixed bottom-0 flex h-16 w-full items-center justify-around rounded-t-md bg-secondary p-4"
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
	{ icon: 'tabler:settings', label: 'Settings' },
	{ icon: 'tabler:user', label: 'Profile' },
]
</script>
