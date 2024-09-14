export const useApi = (route: string, request = 'GET', options: any) => {
	const { data, error, refresh } = useFetch(
		`${process.env.API_ENDPOINT}${route}`,
		{
			method: request,
			...options,
		},
	)

	return { data, error, refresh }
}
