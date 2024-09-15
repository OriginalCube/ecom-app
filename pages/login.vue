<template>
	<div class="flex h-dvh w-full items-start justify-center">
		<div
			v-if="loggingIn"
			class="mt-24 flex w-4/5 flex-col items-center justify-center gap-4"
		>
			<Label class="text-4xl font-bold text-primary">Login</Label>
			<Input v-model="user.email" placeholder="Email" />
			<Input v-model="user.password" placeholder="Password" type="password" />
			<Button
				class="w-full"
				@click="
					useAuth().loginUser({ email: user.email, password: user.password })
				"
				>Login
			</Button>
			<Button class="w-full" variant="secondary" @click="loggingIn = false">
				Create Account
			</Button>
		</div>

		<div
			v-else
			class="mt-24 flex w-4/5 flex-col items-center justify-center gap-4"
		>
			<Label class="text-4xl font-bold text-primary">Register</Label>
			<Input v-model="user.name" placeholder="Name" />
			<Input v-model="user.email" placeholder="Email" />
			<Select v-model="user.role" placeholder="Role">
				<SelectTrigger>
					<SelectValue placeholder="Select a role" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="customer">Customer</SelectItem>
					<SelectItem value="admin">Admin</SelectItem>
				</SelectContent>
			</Select>
			<Input v-model="user.password" placeholder="Password" type="password" />
			<Button class="mt-4 w-full" @click="() => useAuth().registerUser(user)"
				>Register</Button
			>
			<Button class="mt-4 w-full" @click="loggingIn = true" variant="secondary"
				>Already have an account?Login
			</Button>
		</div>
	</div>
</template>

<script lang="ts" setup>
const loggingIn = ref(true)
const user = reactive({
	name: '',
	email: '',
	role: '',
	password: '',
	avatar: 'https://picsum.photos/800',
})
</script>
