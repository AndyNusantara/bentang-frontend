import { Button } from '@mui/material'
import { useSidebarStore } from '../store/sidebar.store'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'

const Sidebar = () => {
	const isOpen = useSidebarStore((state) => state.isOpen)

	return (
		<div
			className={`w-64 fixed top-0 left-0 h-screen p-5 flex flex-col items-center gap-5 bg-sky-950 ease-in-out transition-transform
         ${isOpen ? 'translate-x-0' : '-translate-x-64'}`}
		>
			<img src="/src/assets/random.png" alt="random picture" width={100} />
			<Button
				variant="contained"
				startIcon={<DashboardRoundedIcon fontSize="medium" />}
			>
				Dashboard
			</Button>
		</div>
	)
}

export default Sidebar
