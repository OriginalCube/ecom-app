<template>
	<footer
		class="fixed bottom-0 flex h-16 w-full items-center justify-around rounded-t-md bg-secondary p-4"
	>
		<FooterNavigation
			v-for="item in navigation"
			:key="item.label"
			:action="item.action"
			:icon="item.icon"
			:label="item.label"
		/>
	</footer>
</template>

<script lang="ts" setup>
const navigation = [
	{ icon: 'tabler:home', label: 'Home', action: () => useRouter().push('/') },
	{
		icon: 'tabler:settings',
		label: 'Settings',
		action: () => useRouter().push('/settings'),
	},
	{
		icon: 'tabler:user',
		label: 'Profile',
		action: () => useRouter().push('/profile'),
	},
]
</script>
