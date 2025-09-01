import Card from './components/card.component'
import { useMapStore } from '../store/map.store'
import Map from './components/map.component'
import Summary from './components/summary.component'
import { useQuery } from '@tanstack/react-query'

import { fetchData } from '../utils/function'
import type { SummaryDataType, SummaryTableDataType } from '../types/type'
import CustomModal from './components/modal.component'
import { useModalStore } from '../store/modal.store'
import CustomBarChart from './components/charts/barChart.component'
import BarLineChart from './components/charts/barLineChart.component'
import CustomPieChart from './components/charts/pieChart.component'
import CustomTable from './components/table.component'

const Dashboard = () => {
	const handleProvinceClick = useMapStore((state) => state.setSelectedProvince)
	const selectedProvince = useMapStore((state) => state.provinceName)
	const selectedCode = useMapStore((state) => state.code)
	const selectedRegencyCode = useModalStore(
		(state) => state.selectedRegencyCode
	)
	const selectedRegencyName = useModalStore(
		(state) => state.selectedRegencyName
	)

	const { data, isLoading } = useQuery<{
		summaryData: SummaryDataType
		tableData: SummaryTableDataType
	}>({
		queryKey: ['summary', selectedCode],
		queryFn: () => fetchData(selectedCode)
	})

	const modalChartData =
		data?.tableData.data[selectedRegencyCode].data_sekolah.map((s) => ({
			bentuk_pendidikan: s.bentuk_pendidikan,
			banyak_sekolah: s.banyak_sekolah,
			anggaran: s.anggaran
		})) || []

	const pieChartData = data?.summaryData.data.per_tingkat
		? Object.entries(data.summaryData.data.per_tingkat).map(
				([tingkat, value]) => ({
					name: tingkat.toUpperCase(),
					value: value?.anggaran ?? 0
				})
		  )
		: []

	const chartData =
		data?.tableData.data.map((prov) => ({
			nama_wilayah: prov.nama_wilayah,
			banyak_sekolah: prov.total_sekolah,
			anggaran: prov.total_anggaran
		})) || []

	if (isLoading) return <div>Loading...</div>

	if (data) {
		return (
			<div className="w-full flex flex-wrap gap-2 p-5 m-2 shadow-lg">
				<div className="w-full flex gap-2">
					<Card
						title="Persebaran Program Revitalisasi Sekolah Nasional"
						desc="Menampilkan distribusi program revitalisasi sekolah di seluruh provinsi"
						classNames="max-w-2xl"
					>
						<Map onProvinceClick={handleProvinceClick} />
					</Card>
					<Card
						title={`Data Ringkasan - ${
							selectedProvince ? selectedProvince : 'Nasional'
						}`}
						desc="Detail alokasi anggaran untuk setiap tingkat pendidikan"
					>
						<Summary data={data.summaryData} />
					</Card>
				</div>
				<div className="w-full flex gap-2">
					<Card
						title={`${
							selectedProvince
								? 'Tabel Revitalisasi Sekolah Provinsi - Provinsi ' +
								  selectedProvince
								: 'Tabel Revitalisasi Sekolah Berdasarkan Provinsi'
						}`}
						desc="Detail alokasi anggaran untuk setiap tingkat pendidikan"
					>
						<CustomTable
							data={data.tableData}
							isProvinceSelected={selectedCode ? true : false}
						/>
					</Card>
					<Card
						title={`Anggaran Revitalisasi - ${
							selectedProvince ? 'Provinsi ' + selectedProvince : 'Nasional'
						}`}
						desc="Per-tingkat pendidikan"
					>
						<CustomPieChart data={pieChartData} />
					</Card>
				</div>
				<Card
					title={`Banyaknya Revitalisasi Sekolah Berdasarkan Anggaran Revitalisasi - ${
						selectedProvince ? 'Provinsi ' + selectedProvince : 'Nasional'
					}`}
					desc="Data revitalisasi sekolah dan anggaran per jenjang"
				>
					<BarLineChart
						data={chartData}
						xKey="nama_wilayah"
						barKey="banyak_sekolah"
						lineKey="anggaran"
					/>
				</Card>
				<CustomModal
					title="Detail Wilayah"
					desc={'Informasi Revitalisasi Sekolah di ' + selectedRegencyName}
				>
					<div className="w-full h-full grid grid-cols-2 grid-rows-2">
						<Card title="Jumlah Revitalisasi Sekolah per Jenjang">
							<CustomBarChart
								data={modalChartData}
								xKey="bentuk_pendidikan"
								barKeys={['banyak_sekolah']}
							/>
						</Card>
						<Card title="Jumlah Revitalisasi Sekolah per Jenjang">
							<CustomBarChart
								data={modalChartData}
								xKey="bentuk_pendidikan"
								barKeys={['anggaran']}
							/>
						</Card>
						<Card
							title="Jumlah Revitalisasi Sekolah per Jenjang"
							classNames="col-span-2"
						>
							<BarLineChart
								data={modalChartData}
								xKey="bentuk_pendidikan"
								barKey="banyak_sekolah"
								lineKey="anggaran"
							/>
						</Card>
					</div>
				</CustomModal>
			</div>
		)
	}
}

export default Dashboard
