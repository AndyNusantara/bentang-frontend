import Metric from './metric.component'
import { formatToIDR } from '../../utils/function'
import type { SummaryDataType } from '../../types/type'

type SummaryPropsType = {
	data: SummaryDataType
}

const Summary = ({ data }: SummaryPropsType) => {
	return (
		<div>
			<div className="grid grid-cols-2 gap-2">
				<Metric
					title="Total Revitalisasi Sekolah"
					value={String(data.data.total_revitalisasi_sekolah)}
				/>
				<Metric
					title="Anggaran Total Revitalisasi Sekolah"
					value={formatToIDR(data.data.anggaran_total_revitalisasi_sekolah)}
				/>
			</div>
			{Object.entries(data.data.per_tingkat).map(([level, values]) => (
				<div key={level} className="grid grid-cols-2 gap-2">
					<Metric
						title={`Revitalisasi Sekolah ${level}`}
						value={String(values.jumlah)}
					/>
					<Metric
						title={`Anggaran Revitalisasi Sekolah ${level}`}
						value={formatToIDR(values.anggaran)}
					/>
				</div>
			))}
		</div>
	)
}

export default Summary
