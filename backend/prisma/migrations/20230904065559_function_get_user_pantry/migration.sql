CREATE OR REPLACE FUNCTION get_user_pantry_ingredients(user_id integer)
RETURNS TABLE(
  ingredient_name text, 
  quantity_in_stock float, 
  initial_amount int, 
  unit text
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        i.name AS ingredient_name, 
        pi.quantityInStock AS quantity_in_stock,
        pi.initialAmount AS initial_amount,
        pi.unit AS unit
    FROM 
        Pantry p
    JOIN 
        PantryIngredient pi ON p.id = pi.pantryId
    JOIN 
        Ingredient i ON pi.ingredientId = i.id
    WHERE 
        p.userId = user_id;
END;
$$ LANGUAGE plpgsql;
