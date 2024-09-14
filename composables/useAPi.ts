export const useApi = (route: string, request = 'GET', options: any) => {
	const config = useRuntimeConfig()
	const baseURL = config.public.baseURL
	if (baseURL) {
		const { data, error, refresh, status } = useFetch(`${baseURL}${route}`, {
			method: request,
			...options,
		})
		return { data, error, refresh, status }
	}

	return {
		data: null,
		error: 'API is not working!',
		refresh: null,
		status: 'pending',
	}
}
