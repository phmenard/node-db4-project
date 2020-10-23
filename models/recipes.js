const { where } = require("../data/config")
const db = require("../data/config")

function find() {
	return db("recipe")
}

function getSteps(recipeId) {
    return db("recipe_steps")
}

function getStepsForRecipe(recipeId) {
    return db("recipe_steps as rs")
        .innerJoin("recipe as r", "r.id", "rs.recipe_id")
        .innerJoin("ingredient_type as it", "it.base_id", "rs.ingredient_id")
        .where("rs.recipe_id", recipeId)
        .select(["it.name", "rs.amount", "it.name" ])
}

module.exports = {
    find,
    getSteps,
    getStepsForRecipe,

}