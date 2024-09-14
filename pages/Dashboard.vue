<template>
	<div class="w-full">
		{{ data }}
	</div>
</template>

<script lang="ts" setup>
const { data } = useApi('/products?offset=0&limit=10')
</script>
