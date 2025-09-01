import { Paper } from '@mui/material'
import {
	ComposedChart,
	Bar,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer
} from 'recharts'
import { formatToIDR } from '../../../utils/function'

type ChartDataItem = {
	[key: string]: string | number
}

interface BarLineChartProps<T extends ChartDataItem> {
	data: T[]
	xKey: keyof T
	barKey: keyof T
	lineKey: keyof T
}

const BarLineChart = <T extends ChartDataItem>({
	data,
	xKey,
	barKey,
	lineKey
}: BarLineChartProps<T>) => {
	return (
		<Paper sx={{ p: 2, width: '100%', height: 400 }}>
			<ResponsiveContainer width="100%" height="100%">
				<ComposedChart data={data}>
					<XAxis dataKey={xKey as string} />
					<YAxis
						yAxisId="left"
						orientation="left"
						tickFormatter={(value) =>
							lineKey === 'anggaran' ? formatToIDR(value) : value
						}
					/>
					<YAxis yAxisId="right" orientation="right" />
					<Tooltip
						formatter={(value, name) => {
							if (name === lineKey) {
								return formatToIDR(String(value))
							}
							return value
						}}
					/>
					<Legend />
					<Bar yAxisId="right" dataKey={barKey as string} fill="#8884d8" />
					<Line
						yAxisId="left"
						type="monotone"
						dataKey={lineKey as string}
						stroke="#ff7300"
					/>
				</ComposedChart>
			</ResponsiveContainer>
		</Paper>
	)
}

export default BarLineChart
