import React from 'react'

export const Layout = () => {
    return (
        <div>

            <img src="./image-omelette.jpeg" alt="Omelette" />

            <h1>Simple Omelette Recipe</h1>

            <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>

            <span>Preparation time</span>

            <ul>
                <li> Total: Approximately 10 minutes</li>
                <li> Preparation: 5 minutes </li>
                <li> Cooking: 5 minutes </li>
            </ul>

            <h2>Ingredients</h2>

            <ul>
                <li> 2-3 large eggs </li>
                <li> Salt, to taste </li>
                <li> Pepper, to taste </li>
                <li> 1 tablespoon of butter or oil</li>
                <li> Optional fillings: cheese, diced vegetables, cooked meats, herbs </li>
            </ul>

            <h2>Instructions</h2>

            <ol>
                <li><strong>Beat the eggs</strong>:In a bowl, beat the eggs with a pinch
                    of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>

                <li><strong>Heat the pan</strong>:Place a non-stick frying pan over medium heat and add butter or oil.</li>

                <li><strong>Cook the omelette</strong>: Once the butter is melted and bubbling, pour in the eggs.
                    Tilt the pan to ensure the eggs evenly coat the surface.</li>

                <li><strong>Addfillings(optional)</strong>: When the eggs begin to set at the edges but are still slightly runny in the
                    middle, sprinkle your chosen fillings over one half of the omelette.</li>

                <li><strong>Fold and serve</strong>: As the omelette continues to cook,
                    carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>

                <li><strong>Enjoy</strong>: Serve hot, with additional salt and pepper if needed.</li>
            </ol>

            <h2>Nutrition</h2>

            <p>The table below nutitional values per serving without the additional fillings.</p>

            <ul>
                <li>Calories <strong>277kcal</strong></li> 
                <li>Carbs <strong>0g</strong></li>
                <li>Protein <strong>20g</strong></li>
                <li>Fat <strong>22g</strong></li>
            </ul>

        </div>
    )
}
