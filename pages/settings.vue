<template>
	<div class="mb-4 flex h-dvh w-full flex-col items-center gap-4 px-4">
		<Label class="mt-8 w-full text-4xl font-bold text-primary">
			Update Themes
		</Label>
		<Select v-model="useAuthStore().theme" placeholder="Theme">
			<SelectTrigger>
				<SelectValue placeholder="Select a theme" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value=" ">Original</SelectItem>
				<SelectItem value="sakura">Myrr</SelectItem>
				<SelectItem value="miku">Miku</SelectItem>
				<SelectItem value="yuki">Yuki</SelectItem>
			</SelectContent>
		</Select>
	</div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/useAuthStore'
</script>
