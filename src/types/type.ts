export type SummaryDataType = {
	success: boolean
	status: string
	data: {
		total_revitalisasi_sekolah: number
		anggaran_total_revitalisasi_sekolah: number
		per_tingkat: {
			paud: {
				jumlah: number
				anggaran: number
			}
			sd: {
				jumlah: number
				anggaran: number
			}
			smp: {
				jumlah: number
				anggaran: number
			}
			sma: {
				jumlah: number
				anggaran: number
			}
		}
	}
}

type DataSekolah = {
	bentuk_pendidikan: string
	banyak_sekolah: number
	anggaran: number
}

export type SummaryTableDataType = {
	success: boolean
	status: string
	message: string
	data: [
		{
			kode_wilayah: number
			nama_wilayah: string
			data_sekolah: DataSekolah[]
			total_sekolah: number
			total_anggaran: number
		}
	]
}
