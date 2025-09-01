import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Button } from '@mui/material'
import { useSidebarStore } from '../store/sidebar.store'

const Menubar = () => {
	const toggleSidebar = useSidebarStore((state) => state.toggleVisibility)

	return (
		<div className="w-full p-3 shadow-md">
			<Button onClick={toggleSidebar}>
				<MenuRoundedIcon fontSize="medium" />
			</Button>
		</div>
	)
}

export default Menubar
