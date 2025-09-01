import { Paper } from '@mui/material'
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts'
import { formatToIDR } from '../../../utils/function'

type PieChartData = {
	name: string
	value: number
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042']

type Props = {
	data: PieChartData[]
}

const PieChartComponent = ({ data }: Props) => {
	return (
		<Paper sx={{ p: 2, width: '100%', height: 400 }}>
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={data}
						dataKey="value"
						nameKey="name"
						cx="50%"
						cy="50%"
						outerRadius={120}
						label={({ name, value }) => `${name}: ${formatToIDR(value ?? 0)}`}
					>
						{data.map((_, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Tooltip
						formatter={(value) => {
							const normalizedValue = Array.isArray(value) ? value[0] : value
							return formatToIDR(normalizedValue ?? 0)
						}}
					/>
				</PieChart>
			</ResponsiveContainer>
		</Paper>
	)
}

export default PieChartComponent
