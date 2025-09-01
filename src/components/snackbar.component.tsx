import { Snackbar, Button, Typography, Paper } from '@mui/material'
import { useMapStore } from '../store/map.store'
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded'

const CustomSnackbar = () => {
	const isOpen = useMapStore((state) => state.provinceName != '')
	const handleClose = useMapStore((state) => state.setSelectedProvince)
	const selectedProvince = useMapStore((state) => state.provinceName)

	return (
		<Snackbar
			open={isOpen}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			autoHideDuration={null}
			sx={{ zIndex: 1200 }}
		>
			<Paper className="flex flex-col p-5 shadow-xl">
				<Typography variant="subtitle1">Provinsi Terpilih :</Typography>
				<Typography variant="subtitle1" fontWeight={700}>
					{selectedProvince}
				</Typography>
				<Button
					onClick={() => handleClose('', '')}
					variant="contained"
					startIcon={<FilterAltRoundedIcon />}
				>
					Reset Filter
				</Button>
			</Paper>
		</Snackbar>
	)
}

export default CustomSnackbar
