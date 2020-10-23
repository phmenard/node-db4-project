
exports.seed = async function(knex) {
	await knex("base_ingredient").insert([   
		{ name: "salt" },
    { name: "pepper"},
    {name: "hotbogs"},
    {name: "ground beef"},
    {name: "tomatoes"}
	])
}
