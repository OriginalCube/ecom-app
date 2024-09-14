export type Product = {
	id: number
	name: string
	description: string
	price: number
	image: string
	category: Category
}

export type Category = {
	id: number
	name: string
	image: string
}
