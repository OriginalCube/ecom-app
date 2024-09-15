<template>
	<nav class="flex h-16 w-full items-center justify-between p-4 text-primary">
		<div
			class="flex cursor-pointer items-center justify-center gap-2"
			@click="useRouter().push('/')"
		>
			<Icon name="flat-color-icons:shop" size="36" />
			<Label class="text-base font-semibold">Ecom App</Label>
		</div>

		<div class="flex items-center justify-center gap-4">
			<Icon name="tabler:notification" size="20" class="hover:cursor-pointer" />
			<Icon name="tabler:shopping-bag" size="20" class="hover:cursor-pointer" />
		</div>
	</nav>
</template>

<script lang="ts" setup></script>
