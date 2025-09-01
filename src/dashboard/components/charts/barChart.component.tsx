import { Paper, Typography } from '@mui/material'
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer
} from 'recharts'
import { formatToIDR } from '../../../utils/function'

interface BarChartProps<T> {
	data: T[]
	xKey: keyof T
	barKeys: (keyof T)[]
	title?: string
}

const CustomBarChart = <T extends Record<string, number | string>>({
	data,
	xKey,
	barKeys,
	title
}: BarChartProps<T>) => {
	if (!data || data.length === 0) return null

	return (
		<Paper sx={{ p: 2, width: '100%', height: 400 }}>
			{title && <Typography variant="h6">{title}</Typography>}
			<ResponsiveContainer width="100%" height="100%">
				<BarChart data={data}>
					<XAxis dataKey={xKey as string} />
					<YAxis />
					<Tooltip
						formatter={(value: number, name: string) =>
							name === 'anggaran'
								? formatToIDR(value)
								: new Intl.NumberFormat().format(value)
						}
					/>
					<Legend />
					{barKeys.map((key, index) => (
						<Bar
							key={index}
							dataKey={key as string}
							fill={['#8884d8', '#82ca9d', '#ffc658', '#ff8042'][index % 4]}
						/>
					))}
				</BarChart>
			</ResponsiveContainer>
		</Paper>
	)
}

export default CustomBarChart
