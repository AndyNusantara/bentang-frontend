import Menubar from './components/menubar.component'
import Sidebar from './components/sidebar.component'
import CustomSnackbar from './components/snackbar.component'
import { useSidebarStore } from './store/sidebar.store'

const Layout = ({ children }: { children: React.ReactNode }) => {
	const isOpen = useSidebarStore((state) => state.isOpen)

	return (
		<div className="flex overflow-hidden">
			<Sidebar />
			<CustomSnackbar />
			<div
				className={`w-full flex flex-col transition-all duration-300 ease-in-out ${
					isOpen ? 'ml-64' : 'ml-0'
				}`}
			>
				<Menubar />
				{children}
			</div>
		</div>
	)
}

export default Layout
