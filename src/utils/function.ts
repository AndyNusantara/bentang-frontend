export const formatToIDR = (value: number | string) => {
	const number = typeof value === 'string' ? parseFloat(value) : value

	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 2
	}).format(number)
}

export const fetchData = async (code: string) => {
	const summaryURL = code
		? `http://localhost:3001/api/provinsi/${code}`
		: `http://localhost:3001/api/provinsi`

	const tableURL = code
		? `http://localhost:3001/api/table/${code}`
		: `http://localhost:3001/api/table`

	const [summaryResponse, tableResponse] = await Promise.all([
		fetch(summaryURL),
		fetch(tableURL)
	])

	if (!summaryResponse.ok || !tableResponse.ok) {
		throw new Error('Failed to fetch summary or table')
	}

	const summaryData = await summaryResponse.json()
	const tableData = await tableResponse.json()

	return { summaryData, tableData }
}
