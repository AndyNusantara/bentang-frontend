import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from '@mui/material'
import type { SummaryTableDataType } from '../../types/type'
import { formatToIDR } from '../../utils/function'
import { useModalStore } from '../../store/modal.store'

type SummaryTablePropsType = {
	data: SummaryTableDataType
	isProvinceSelected: boolean
}

const CustomTable = ({ data, isProvinceSelected }: SummaryTablePropsType) => {
	const handleOpenModal = useModalStore((state) => state.toggleModal)

	return (
		<TableContainer
			component={Paper}
			sx={{ minWidth: 600, maxWidth: 800, maxHeight: 400, overflow: 'auto' }}
		>
			<Table stickyHeader>
				<TableHead>
					<TableRow>
						<TableCell>Provinsi</TableCell>
						<TableCell>Bentuk Pendidikan</TableCell>
						<TableCell>Banyak Sekolah</TableCell>
						<TableCell>Anggaran</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.data.map((province, dataIndex) =>
						province.data_sekolah.map((row, index) => (
							<TableRow
								key={`${province.kode_wilayah}-${row.bentuk_pendidikan}`}
							>
								{index === 0 && (
									<TableCell rowSpan={province.data_sekolah.length}>
										{isProvinceSelected ? (
											<Button
												onClick={() =>
													handleOpenModal(dataIndex, province.nama_wilayah)
												}
											>
												{province.nama_wilayah}
											</Button>
										) : (
											province.nama_wilayah
										)}
									</TableCell>
								)}
								<TableCell>{row.bentuk_pendidikan}</TableCell>
								<TableCell>{row.banyak_sekolah}</TableCell>
								<TableCell>{formatToIDR(row.anggaran)}</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default CustomTable
