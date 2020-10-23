
exports.seed = async function(knex) {
	await knex("recipe_steps").insert([   
    { recipe_id: 1, ingredient_id: 1, amount: "1tbs" },
    { recipe_id: 1, ingredient_id: 3, amount: "1lbs" },
    { recipe_id: 1, ingredient_id: 2, amount: "1tbs" },
    { recipe_id: 2, ingredient_id: 5, amount: "2tbs" },
    { recipe_id: 2, ingredient_id: 4, amount: "1tbs" },
    
  ])
}