import { create } from 'zustand'

interface ModalState {
	isOpen: boolean
	selectedRegencyCode: number
	selectedRegencyName: string
	toggleModal: (code: number, name: string) => void
}

export const useModalStore = create<ModalState>((set) => ({
	isOpen: false,
	selectedRegencyCode: 0,
	selectedRegencyName: '',
	toggleModal: (code, name) =>
		set((state) => ({
			isOpen: !state.isOpen,
			selectedRegencyCode: code,
			selectedRegencyName: name
		}))
}))
