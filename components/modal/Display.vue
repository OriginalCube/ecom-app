<template>
	<div
		class="relative mb-4 flex w-full flex-col items-center overflow-y-auto px-4 md:flex-row"
	>
		<Icon
			name="tabler:refresh"
			class="absolute right-4 top-2 cursor-pointer text-primary"
			size="32"
			@click="() => useAuth().updateProduct(data)"
		/>
		<div class="m-auto my-4 w-4/5">
			<ClientOnly>
				<NuxtImg :src="data.images[0]" class="rounded-md" />
			</ClientOnly>
		</div>

		<div class="flex w-full flex-col items-center justify-center gap-4">
			<Input
				v-model="data.title"
				placeholder="Title"
				:disabled="useAuthStore().user.role === 'customer'"
				class="m-auto mt-8 w-4/5 text-2xl text-primary"
			/>
			<div class="flex w-4/5 items-center gap-2">
				<Input
					v-model="data.price"
					:disabled="useAuthStore().user.role === 'customer'"
					type="number"
					class="text-2xl font-bold text-yellow-400"
				/>
				<Badge class="font-bold">{{ data?.category.name }}</Badge>
			</div>
			<p class="mt-2 w-4/5 text-popover-foreground">{{ data.description }}</p>
			<div class="mt-4 flex h-auto w-4/5 flex-col gap-2 md:flex-row">
				<Button @click="() => addCart(data)">Add to Card</Button>
				<Button variant="destructive" @click="closeModal">Close</Button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useModal } from '~/store/useModal'
import type { Product } from '~/types/Store'
import { useAuthStore } from '~/store/useAuthStore'

const { addCart } = useCart()
const { data, closeModal }: { data: Product } = useModal()
</script>
