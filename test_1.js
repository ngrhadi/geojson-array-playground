// const featureValue = [];
const dataList = {
	type: "FeatureCollection",
	name: "sample",
	crs: {
		type: "name",
		properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
	},
	features: [
		{
			type: "Feature",
			properties: {
				id: 1,
				status: "Existing",
				db_oper: "Insert",
				remarks: null,
				device_id: "SSS6352dmd751",
				house_no: "NO 6",
				str_name: "JLN FELDA PALONG TIMUR 6",
				dist_tranx: "456040383",
			},
			geometry: { type: "Point", coordinates: [102.68010078, 2.69097441] },
		},
		{
			type: "Feature",
			properties: {
				id: 2,
				status: "Existing",
				db_oper: "Insert",
				remarks: null,
				device_id: "SSS6352dmd752",
				house_no: "SURAU",
				str_name: "JLN FELDA PALONG TIMUR 6",
				dist_tranx: "456040383",
			},
			geometry: { type: "Point", coordinates: [102.67985109, 2.69108976] },
		},
		{
			type: "Feature",
			properties: {
				id: 3,
				status: "Existing",
				db_oper: "Insert",
				remarks: null,
				device_id: "SSS6352dmd753",
				house_no: "NO 2",
				str_name: "JLN FELDA PALONG TIMUR 6",
				dist_tranx: "456040383",
			},
			geometry: { type: "Point", coordinates: [102.67979013, 2.6908595] },
		},
		{
			type: "Feature",
			properties: {
				id: 4,
				status: "Existing",
				db_oper: "Insert",
				remarks: null,
				device_id: "SSS6352dmd754",
				house_no: "NO 3",
				str_name: "JLN FELDA PALONG TIMUR 6",
				dist_tranx: "456040383",
			},
			geometry: { type: "Point", coordinates: [102.67991412, 2.69046596] },
		},
	],
};

for (let i = 0; i < dataList.features.length; i++) {
	const data = dataList.features[i];
	console.log(data);
}
