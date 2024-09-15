export type Product = {
	id: number
	title: string
	description: string
	price: number
	images: string[]
	category: Category
}

export type Category = {
	id: number
	name: string
	image: string
}
