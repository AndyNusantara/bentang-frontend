import React from 'react'
import {
	ComposableMap,
	Geographies,
	Geography,
	ZoomableGroup
} from 'react-simple-maps'

const geoUrl = '/prov.json'

interface MapChartProps {
	onProvinceClick: (name: string, code: string) => void
}

const Map: React.FC<MapChartProps> = ({ onProvinceClick }) => {
	return (
		<ComposableMap projection="geoMercator">
			<ZoomableGroup zoom={6} minZoom={6} maxZoom={20} center={[120, -2]}>
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies.map((geo) => {
							const provinceName = geo.properties.province_kemendagri_name
							const provinceCode = geo.properties.province_kemendagri_code

							return (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									onClick={() => onProvinceClick(provinceName, provinceCode)}
									style={{
										default: {
											fill: '#D6D6DA',
											outline: 'none'
										},
										hover: {
											fill: '#4F46E5',
											outline: 'none'
										},
										pressed: {
											fill: '#4338CA',
											outline: 'none'
										}
									}}
								/>
							)
						})
					}
				</Geographies>
			</ZoomableGroup>
		</ComposableMap>
	)
}

export default Map
