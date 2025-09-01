import { create } from 'zustand'

interface MapState {
	provinceName: string
	code: string
	setSelectedProvince: (name: string, code: string) => void
}

export const useMapStore = create<MapState>((set) => ({
	provinceName: '',
	code: '',
	setSelectedProvince: (name, code) =>
		set(() => ({ provinceName: name, code: code }))
}))
