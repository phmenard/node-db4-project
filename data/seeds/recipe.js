
exports.seed = async function(knex) {
	await knex("recipe").insert([   
		{ name: "Meat Loaf"},
		{ name: "Hot Dog Stew"},
	])
}
