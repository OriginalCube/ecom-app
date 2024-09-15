<template>
	<div class="m-auto flex w-4/5 flex-col gap-4 text-primary">
		<NuxtImg :src="useAuthStore().user.image" class="m-auto size-24" />
		<Label>Name</Label>
		<Input :default-value="useAuthStore().user.name" />
		<Label>Email</Label>
		<Input :default-value="useAuthStore().user.email" />
		<Button class="mt-2 w-full" @click="useAuthStore().clearUser()">
			Logout
		</Button>
	</div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/useAuthStore'
</script>
