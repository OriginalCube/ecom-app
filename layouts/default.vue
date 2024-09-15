<template>
	<div class="bg-background" :class="authStore.theme">
		<Toaster />
		<Modal />
		<Header />
		<div class="m-auto max-w-screen-xl">
			<slot />
		</div>
		<Footer v-if="isMobile" />
	</div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/useAuthStore'

const { isMobile } = useDevice()
const authStore = useAuthStore()
</script>
