<template>
	<div class="bg-background">
		<Modal />
		<Header />
		<div class="max-w-screen-xl m-auto">
			<slot />
		</div>
		<Footer v-if="isMobile" />
	</div>
</template>

<script lang="ts" setup>
const { isMobile } = useDevice()
</script>
