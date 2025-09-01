import { create } from 'zustand'

interface SidebarState {
	isOpen: boolean
	toggleVisibility: () => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
	isOpen: true,
	toggleVisibility: () => set((state) => ({ isOpen: !state.isOpen }))
}))
