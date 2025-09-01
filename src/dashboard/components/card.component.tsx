import { Typography } from '@mui/material'

type CardPropsType = {
	title: string
	desc?: string
	classNames?: string
	children: React.ReactNode
}

const Card = (props: CardPropsType) => {
	return (
		<div
			className={`flex flex-col gap-2 p-3 w-full shadow-md ${props.classNames}`}
		>
			<div className="flex flex-col w-full">
				<Typography variant="h6" fontWeight={700}>
					{props.title}
				</Typography>
				<Typography variant="subtitle1" className="text-gray-700">
					{props.desc}
				</Typography>
			</div>
			{props.children}
		</div>
	)
}

export default Card
