
exports.up = async function(knex) {
    await knex.schema.createTable("recipe", (table) =>{
        table.increments('id').primary();
        table.text('name').notNull();
    })

    await knex.schema.createTable("base_ingredient", (table) => {
        table.increments("id");
        table.text("name").notNull().unique();
    })

    await knex.schema.createTable("ingredient_type", (table)=>{
        table.increments("id")
        table.text("name").notNull()
        table.integer("base_id")
            .references("id")
            .inTable("base_ingredient")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
    })

    await knex.schema.createTable("recipe_steps", (table)=>{
        table.integer("recipe_id")
            .references("id")
            .inTable("recipe")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()

        table.integer("ingredient_id")
            .references("id")
            .inTable("ingredient_type")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()
        
        table.float("amount").notNull()
        table.primary(["recipe_id", "ingredient_id"])
            
    })


}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipe_steps');
    await knex.schema.dropTableIfExists('ingredient_type');
    await knex.schema.dropTableIfExists('base_ingredient');
    await knex.schema.dropTableIfExists('recipe');   
};
