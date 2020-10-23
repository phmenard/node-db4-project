const express = require("express")
const Recipe = require("../models/recipes")

const router = express.Router()

router.get("/recipe", async (req, res, next) => {
	try {
		const recipes = await Recipe.find()
		res.json(recipes)
	} catch(err) {
		next(err)
	}
})

router.get("/steps", async (req, res, next) => {
	try {
		const steps = await Recipe.getSteps()
		res.json(steps)
	} catch(err) {
		next(err)
	}
})

router.get("/recipe/:id/steps", async (req, res, next) => {
	try {
		const steps = await Recipe.getStepsForRecipe(req.params.id)
		res.json(steps)
	} catch(err) {
		next(err)
	}
})

module.exports = router