import React from 'react'

export const Layout = () => {
    return (
        <div>

            <img src="./image-omelette.jpeg" alt="Omelette" />

            <h1>Simple Omelette Recipe</h1>
            
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sequi veritatis ratione architecto modi odio inventore explicabo distinctio soluta a voluptatum, ipsa,
                dolores delectus accusamus mollitia in quisquam obcaecati doloremque cum.
            </p>

            <span>Preparation time</span>

            <ul>
                <li> Total:</li>
                <li> Preparation: 5 minutes </li>
                <li> Cooking: 5 minutes </li>
            </ul>

            <h2>Ingredients</h2>

            <ul>
                <li> 2-3 large eggs </li>
                <li> Salt, to taste </li>
                <li> Pepper, to taste </li>
                <li> 1 tablespoon of butter op oil</li>
                <li> Optional fillings: cheese, diced vegetables, cooked meats, herbs </li>
            </ul>

            <h2>Instructions</h2>

            <ol>
                <li><strong>Beat the eggs:</strong></li>
                <li><strong>Heat the pan:</strong></li>
                <li><strong>Cook the omelette:</strong></li>
                <li><strong>Addfillings(optional):</strong></li>
                <li><strong>Fold and serve:</strong></li>
                <li><strong>Enjoy:</strong></li>
            </ol>

            <h2>Nutrition</h2>

            <p>The table below nutitional values per serving without the additional fillings.</p>

        </div>
    )
}
