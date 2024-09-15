<template>
	<div class="bg-background">
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
const { isMobile } = useDevice()
</script>
