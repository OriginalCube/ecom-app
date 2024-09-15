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
			<ClientOnly>
				<Icon
					v-if="useAuthStore().user.role === 'admin'"
					name="tabler:plus"
					size="24"
					class="text-primary hover:cursor-pointer"
					@click="() => useModal().openModal('CRUD')"
				/>
			</ClientOnly>
			<Icon
				name="tabler:settings"
				size="24"
				class="text-primary hover:cursor-pointer"
				@click="() => useRouter().push('/settings')"
			/>
			<Icon
				name="tabler:shopping-bag"
				size="24"
				class="text-yellow-400 hover:cursor-pointer"
				@click="() => useModal().openModal('Cart', useCartStore().cart)"
			/>
		</div>
	</nav>
</template>

<script lang="ts" setup>
import { useModal } from '~/store/useModal'
import { useCartStore } from '~/store/useCartStore'
import { useAuthStore } from '~/store/useAuthStore'
</script>
