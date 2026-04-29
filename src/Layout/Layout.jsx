import React from 'react'

export const Layout = () => {
    return (
        <div className='sm:w-full sm:h-full flex flex-col text-[13px] justify-center bg-white px-8 py-2 lg:rounded-2xl gap-5 lg:w-150 lg:h-auto  '>

            <img className='rounded-xl mb-8 mt-4'
                src="./image-omelette.jpeg" 
                alt="Omelette" />

            <h1 className='font-normal text-3xl'>Simple Omelette Recipe</h1>

            <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>

            <span className='text-[#7b284f] font-bold flex text-sm flex-row pl-6 mt-4'>Preparation time</span>

            <ul className='flex flex-col gap-2 mb-6 list-disc pl-11 marker:text-[#854632]'>
                <li><p className='pl-2'><strong>Total</strong>: Approximately 10 minutes</p></li>
                <li><p className='pl-2'><strong>Preparation</strong>: 5 minutes </p></li>
                <li><p className='pl-2'><strong>Cooking</strong>: 5 minutes </p></li>
            </ul>

            <h2 className='text-2xl'>Ingredients</h2>

            <ul className='flex flex-col gap-2 mb-6 list-disc pl-5 marker:text-[#854632]'>
                <li><p className='pl-4'>2-3 large eggs</p></li>
                <li><p className='pl-4'>Salt, to taste</p></li>
                <li><p className='pl-4'>Pepper, to taste</p></li>
                <li><p className='pl-4'>1 tablespoon of butter or oil</p></li>
                <li><p className='pl-4'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</p></li>
            </ul>

            <hr className="border-t border-[#e4ded8] mb-2" /> 

            <h2 className='text-2xl'>Instructions</h2>

            <ol className='flex flex-col mb-4 gap-2 list-decimal pl-5 marker:text-[#854632] marker:font-bold'>
                <li><p className='pl-4'><strong>Beat the eggs</strong>:In a bowl, beat the eggs with a pinch
                    of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</p></li>

                <li><p className='pl-4'><strong>Heat the pan</strong>:Place a non-stick frying pan over medium heat and add butter or oil.</p></li>

                <li><p className='pl-4'><strong>Cook the omelette</strong>: Once the butter is melted and bubbling, pour in the eggs.
                    Tilt the pan to ensure the eggs evenly coat the surface.</p></li>

                <li><p className='pl-4'><strong>Addfillings(optional)</strong>: When the eggs begin to set at the edges but are still slightly runny in the
                    middle, sprinkle your chosen fillings over one half of the omelette.</p></li>

                <li><p className='pl-4'><strong>Fold and serve</strong>: As the omelette continues to cook,
                    carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</p></li>

                <li><p className='pl-4'><strong>Enjoy</strong>: Serve hot, with additional salt and pepper if needed.</p></li>
            </ol>

            <hr className="border-t border-[#e4ded8] mb-2" /> 

            <h2 className='text-2xl '>Nutrition</h2>

            <p>The table below nutitional values per serving without the additional fillings.</p>

            <ul className='flex flex-col gap-4 pl-6 justify-center mb-7'>
                <li >Calories <strong className='text-[#854632] ml-39.5' >277kcal</strong></li>

                <hr className="border-t border-[#e4ded8]" /> 

                <li >Carbs <strong className='text-[#854632] ml-42.5' > 0g </strong></li>

                <hr className="border-t border-[#e4ded8]" /> 

                <li >Protein <strong className='text-[#854632] ml-40.5'>20g</strong></li>

                <hr className="border-t border-[#e4ded8]" /> 

                <li >Fat <strong className='text-[#854632] ml-46.5'>22g</strong></li>
            </ul>

        </div>
    )
}
