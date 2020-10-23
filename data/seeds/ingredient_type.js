
exports.seed = async function(knex) {
	await knex("ingredient_type").insert([   
		{ name: "sea", base_id: 1 },
    { name: "black", base_id: 2},
    {name: "nathans", base_id: 3},
    {name: "lean", base_id: 4},
    {name: "fresh", base_id: 3},
	])
}
