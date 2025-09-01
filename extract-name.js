import fs from 'fs'

// adjust if your file path is different
const raw = fs.readFileSync('./public/Provinsi.json', 'utf-8')
const geo = JSON.parse(raw)

// GeoJSON format usually has features[].properties.name
const provinces = geo.features.map((f) => ({
	code: f.properties.KODE_PROV,
	name: f.properties.PROVINSI,
	id: f.id
}))

// Save into a new JSON file
fs.writeFileSync('provinces.json', JSON.stringify(provinces, null, 2), 'utf8')

console.log('✅ provinces.json has been created!')
