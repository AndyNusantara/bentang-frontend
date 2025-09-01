import { Box, Modal, Typography } from '@mui/material'
import { useModalStore } from '../../store/modal.store'

type ModalPropsType = {
	title?: string
	desc?: string
	children: React.ReactNode
}

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	border: '1px solid #000',
	width: 1000,
	height: 800,
	boxShadow: 24,
	p: 4
}

const CustomModal = (props: ModalPropsType) => {
	const isModalOpen = useModalStore((state) => state.isOpen)
	const toggleModal = useModalStore((state) => state.toggleModal)
	return (
		<Modal open={isModalOpen} onClose={() => toggleModal(0, '')}>
			<Box sx={style}>
				<Typography variant="h6" component="h2">
					{props.title}
				</Typography>
				<Typography>{props.desc}</Typography>
				{props.children}
			</Box>
		</Modal>
	)
}

export default CustomModal
