import { Typography } from '@mui/material'

type MetricPropsType = {
	title: string
	value: string
}
const Metric = (props: MetricPropsType) => {
	return (
		<div className="w-full h-32 p-3 flex flex-col justify-center shadow-xl">
			<Typography variant="subtitle1">{props.title}</Typography>
			<Typography variant="h6" fontWeight={700}>
				{props.value}
			</Typography>
		</div>
	)
}

export default Metric
