<template>
	<div
		class="mb-4 flex h-auto w-full flex-col items-center gap-4 overflow-hidden px-4"
	>
		<Label class="m-auto mt-8 w-full text-4xl font-bold text-primary">
			Cart
		</Label>

		<div
			class="flex h-auto w-full flex-col items-center justify-between gap-4 overflow-y-auto"
			v-if="data.length"
		>
			<div v-for="item in data" :key="item.id" class="w-full">
				<div class="flex w-full justify-between gap-2">
					<NuxtImg :src="item.images[0]" class="size-1/3 rounded-md" />

					<div class="flex h-auto w-2/3 flex-col gap-2">
						<Label class="font-bold text-primary md:text-lg">{{
							item.title
						}}</Label>
						<Label
							class="w-10/12 overflow-hidden text-ellipsis whitespace-nowrap"
							>{{ item.description }}</Label
						>
						<div class="flex items-center gap-4">
							<Label class="text-xl font-bold text-yellow-400 md:text-4xl"
								>${{ item.price }}</Label
							>
							<Badge class="font-bold">{{ item?.category.name }}</Badge>
						</div>
					</div>
				</div>
			</div>
		</div>

		<Label class="m-auto w-4/5 text-lg text-destructive" v-else>
			Cart is empty
		</Label>

		<div class="flex items-center justify-center gap-4">
			<Button
				v-if="data.length"
				@click="
					() => {
						useCartStore().clearCart()
						closeModal()
					}
				"
				>Checkout</Button
			>
			<Button variant="destructive" @click="closeModal">Close</Button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useModal } from '~/store/useModal'
import type { Product } from '~/types/Store'
import { useCartStore } from '~/store/useCartStore'

const { data, closeModal }: { data: Product[] } = useModal()
</script>
