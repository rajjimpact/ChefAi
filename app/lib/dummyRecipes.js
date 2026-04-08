/**
 * Dummy Recipe Database
 * Used for demo/sample mode — recipes are categorised so image color analysis
 * can pick the best match.
 */

export const RECIPES = [
  // ──────── GREEN / VEGETABLE ────────
  {
    id: "avocado-toast",
    category: "green",
    title: "Smashed Avocado Toast with Poached Egg",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 eggs",
      "1 tbsp lemon juice",
      "Red pepper flakes",
      "Salt & black pepper",
      "Microgreens or baby spinach",
      "Drizzle of extra-virgin olive oil",
    ],
    instructions: [
      "Toast the sourdough slices until golden and crisp.",
      "Halve the avocado, remove the stone, and scoop the flesh into a bowl.",
      "Add lemon juice, salt, and pepper, then mash with a fork to your desired texture.",
      "Bring 2 inches of water to a gentle simmer in a saucepan; add a splash of vinegar.",
      "Crack each egg into a small cup, then gently slide into the water. Poach for 3–4 minutes.",
      "Spread the avocado mixture generously over each toast.",
      "Top with a poached egg, microgreens, and a pinch of red pepper flakes.",
      "Finish with a drizzle of olive oil and serve immediately.",
    ],
  },
  {
    id: "green-curry",
    category: "green",
    title: "Thai Green Curry with Jasmine Rice",
    ingredients: [
      "400 ml coconut milk",
      "2 tbsp green curry paste",
      "200 g chicken breast or tofu",
      "1 zucchini, sliced",
      "1 cup baby spinach",
      "1 red bell pepper",
      "2 kaffir lime leaves",
      "1 tbsp fish sauce (or soy sauce)",
      "1 tsp palm sugar",
      "Fresh Thai basil",
      "Steamed jasmine rice to serve",
    ],
    instructions: [
      "Heat a splash of the thick coconut cream from the top of the can in a wok over medium-high heat.",
      "Add the green curry paste and cook, stirring, for 2 minutes until fragrant.",
      "Add the chicken or tofu and cook until sealed on all sides.",
      "Pour in the remaining coconut milk and add the kaffir lime leaves.",
      "Bring to a simmer, then add the zucchini and bell pepper.",
      "Season with fish sauce and palm sugar; taste and adjust.",
      "Stir in baby spinach and cook for 1 minute until wilted.",
      "Scatter fresh Thai basil over the top and serve with jasmine rice.",
    ],
  },
  {
    id: "broccoli-pasta",
    category: "green",
    title: "Roasted Broccoli & Garlic Pasta",
    ingredients: [
      "300 g penne pasta",
      "1 large head of broccoli, cut into florets",
      "4 cloves garlic, thinly sliced",
      "3 tbsp olive oil",
      "Pinch of chilli flakes",
      "Juice of half a lemon",
      "50 g Parmesan, grated",
      "Salt & black pepper",
    ],
    instructions: [
      "Preheat oven to 220 °C (430 °F). Toss broccoli with 2 tbsp olive oil, salt, and pepper.",
      "Roast for 20 minutes until edges are charred and crispy.",
      "Cook pasta in salted boiling water until al dente. Reserve ½ cup pasta water before draining.",
      "Heat remaining olive oil in a large pan; sauté garlic and chilli flakes until golden.",
      "Add the drained pasta and roasted broccoli to the pan.",
      "Splash in pasta water as needed to create a silky sauce.",
      "Squeeze over lemon juice, toss well, and season to taste.",
      "Serve topped with grated Parmesan.",
    ],
  },

  // ──────── RED / TOMATO / MEAT ────────
  {
    id: "spaghetti-bolognese",
    category: "red",
    title: "Classic Spaghetti Bolognese",
    ingredients: [
      "400 g spaghetti",
      "500 g minced beef",
      "1 large onion, finely diced",
      "2 garlic cloves, minced",
      "400 g canned crushed tomatoes",
      "2 tbsp tomato paste",
      "150 ml red wine",
      "1 tsp dried oregano",
      "1 tsp dried basil",
      "Salt & black pepper",
      "Parmesan cheese to serve",
      "Fresh basil leaves",
    ],
    instructions: [
      "Heat a glug of olive oil in a large saucepan over medium heat. Sauté onion for 5 minutes until soft.",
      "Add garlic and cook for 1 more minute.",
      "Increase heat, add minced beef, and brown all over, breaking it up as you go.",
      "Add tomato paste and stir for 2 minutes to caramelise.",
      "Pour in the red wine and let it bubble for 3 minutes.",
      "Add crushed tomatoes, oregano, basil, salt, and pepper.",
      "Simmer on low heat for at least 30 minutes, stirring occasionally.",
      "Cook spaghetti in salted boiling water until al dente. Drain and toss with the sauce.",
      "Serve topped with Parmesan and fresh basil.",
    ],
  },
  {
    id: "chicken-tikka-masala",
    category: "red",
    title: "Chicken Tikka Masala",
    ingredients: [
      "600 g boneless chicken thighs, cut into chunks",
      "200 ml plain yogurt",
      "2 tsp garam masala",
      "1 tsp turmeric",
      "2 tsp cumin",
      "1 onion, roughly chopped",
      "4 garlic cloves",
      "1 thumb-sized piece of ginger",
      "400 g canned tomatoes",
      "200 ml double cream",
      "2 tbsp butter",
      "Steamed basmati rice to serve",
      "Fresh coriander to garnish",
    ],
    instructions: [
      "Marinate the chicken in yogurt, 1 tsp garam masala, turmeric, and salt for at least 2 hours (overnight is ideal).",
      "Grill or pan-fry the chicken until lightly charred. Set aside.",
      "Blend onion, garlic, and ginger into a paste and fry in butter until deep golden, about 10 minutes.",
      "Add remaining spices and cook for 1 minute.",
      "Add canned tomatoes and simmer for 15 minutes until thick.",
      "Blend the sauce until smooth, then return to heat.",
      "Stir in cream and the cooked chicken; simmer for 10 minutes.",
      "Garnish with fresh coriander and serve with basmati rice.",
    ],
  },
  {
    id: "shakshuka",
    category: "red",
    title: "Shakshuka — Eggs in Spiced Tomato Sauce",
    ingredients: [
      "4 large eggs",
      "400 g canned crushed tomatoes",
      "1 red bell pepper, diced",
      "1 onion, diced",
      "3 garlic cloves, minced",
      "1 tsp smoked paprika",
      "1 tsp cumin",
      "½ tsp chilli flakes",
      "Fresh parsley or coriander",
      "Feta cheese to serve",
      "Crusty bread to serve",
    ],
    instructions: [
      "Heat olive oil in a large skillet over medium heat. Sauté onion and bell pepper until soft, about 8 minutes.",
      "Add garlic, paprika, cumin, and chilli flakes; cook for 1 minute.",
      "Pour in the crushed tomatoes, season well, and simmer for 10 minutes.",
      "Make 4 wells in the sauce and crack an egg into each.",
      "Cover the pan and cook until eggs are just set — about 5 minutes for runny yolks.",
      "Crumble feta over the top and scatter with fresh herbs.",
      "Serve straight from the pan with crusty bread.",
    ],
  },

  // ──────── YELLOW / GOLDEN / CARB ────────
  {
    id: "chicken-rice",
    category: "yellow",
    title: "Hainanese Chicken Rice",
    ingredients: [
      "1 whole chicken (~1.5 kg)",
      "3 cups jasmine rice",
      "4 cloves garlic",
      "4 slices fresh ginger",
      "2 stalks spring onion",
      "2 tbsp sesame oil",
      "Soy sauce and ginger-scallion sauce to serve",
      "Cucumber slices to garnish",
    ],
    instructions: [
      "Poach the whole chicken in a large pot of seasoned water with ginger and spring onion for 40 minutes.",
      "Remove chicken and immediately submerge in an ice-water bath for 10 minutes to tighten the skin.",
      "Reserve the rich poaching broth.",
      "Sauté garlic in sesame oil until golden; add rice and stir to coat.",
      "Cook the rice using the chicken broth instead of water.",
      "Carve the chicken and brush with sesame oil and soy sauce.",
      "Serve sliced chicken over rice with cucumber, dipping sauce, and a bowl of the broth.",
    ],
  },
  {
    id: "banana-pancakes",
    category: "yellow",
    title: "Fluffy Banana Oat Pancakes",
    ingredients: [
      "2 ripe bananas",
      "2 eggs",
      "1 cup rolled oats (blended to flour)",
      "½ tsp baking powder",
      "Pinch of cinnamon",
      "1 tsp vanilla extract",
      "Maple syrup & fresh berries to serve",
    ],
    instructions: [
      "Blend the rolled oats into a fine flour using a blender.",
      "Add bananas, eggs, baking powder, cinnamon, and vanilla. Blend until smooth.",
      "Let the batter rest for 5 minutes — it will thicken slightly.",
      "Heat a non-stick pan over medium-low heat with a small knob of butter.",
      "Pour small ladles of batter and cook until bubbles form on the surface, about 2–3 minutes.",
      "Flip and cook for another 1–2 minutes until golden.",
      "Stack and serve with maple syrup and fresh berries.",
    ],
  },
  {
    id: "fried-rice",
    category: "yellow",
    title: "Ultimate Egg Fried Rice",
    ingredients: [
      "3 cups cooked jasmine rice (day-old is best)",
      "3 eggs, beaten",
      "1 cup frozen peas and carrots",
      "3 spring onions, sliced",
      "3 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tbsp sesame oil",
      "2 cloves garlic, minced",
    ],
    instructions: [
      "Heat a wok over very high heat until smoking. Add vegetable oil.",
      "Scramble the eggs in the wok until just set; push to one side.",
      "Add garlic and the frozen vegetables; stir-fry for 2 minutes.",
      "Break the cold cooked rice into the wok and toss everything together.",
      "Add soy sauce and oyster sauce; toss until every grain is coated.",
      "Drizzle in sesame oil, scatter spring onions, and toss one final time.",
      "Serve immediately as a main or side dish.",
    ],
  },

  // ──────── BROWN / MEAT PROTEINS ────────
  {
    id: "beef-stew",
    category: "brown",
    title: "Hearty Beef & Root Vegetable Stew",
    ingredients: [
      "700 g beef chuck, cut into 4 cm cubes",
      "3 carrots, roughly chopped",
      "3 potatoes, quartered",
      "2 celery stalks, sliced",
      "1 onion, wedged",
      "3 garlic cloves",
      "400 ml beef stock",
      "200 ml red wine",
      "2 tbsp tomato paste",
      "2 sprigs thyme & 2 bay leaves",
      "Salt & black pepper",
    ],
    instructions: [
      "Season beef cubes generously with salt and pepper. Brown in a heavy casserole dish in batches; set aside.",
      "Sauté onion, celery, and garlic in the same pot until softened.",
      "Stir in tomato paste and cook for 2 minutes.",
      "Add red wine and scrape up any browned bits from the bottom.",
      "Return the beef along with carrots, potatoes, stock, thyme, and bay leaves.",
      "Bring to a boil, then cover and simmer on low heat for 1 hour 30 minutes until the beef is fall-apart tender.",
      "Remove thyme sprigs and bay leaves. Adjust seasoning.",
      "Serve with crusty bread or mashed potatoes.",
    ],
  },
  {
    id: "mushroom-risotto",
    category: "brown",
    title: "Creamy Mushroom Risotto",
    ingredients: [
      "300 g Arborio rice",
      "500 g mixed mushrooms (porcini, cremini, shiitake)",
      "1 onion, finely chopped",
      "3 garlic cloves, minced",
      "150 ml dry white wine",
      "1 litre warm vegetable or chicken stock",
      "50 g butter, divided",
      "60 g Parmesan, freshly grated",
      "Fresh thyme & parsley",
    ],
    instructions: [
      "Sauté mushrooms in 1 tbsp butter over high heat until golden. Season and set aside.",
      "In the same pan, soften onion with another tbsp of butter for 5 minutes.",
      "Add garlic and rice; toast for 2 minutes, stirring frequently.",
      "Pour in the white wine and stir until absorbed.",
      "Add hot stock one ladle at a time, stirring continuously and waiting for each ladle to be absorbed before adding the next.",
      "After about 18 minutes the rice should be creamy and al dente.",
      "Stir in the remaining butter and Parmesan off the heat. Fold in the mushrooms.",
      "Serve immediately with fresh parsley and extra Parmesan.",
    ],
  },

  // ──────── MIXED / DEFAULT ────────
  {
    id: "veggie-stir-fry",
    category: "mixed",
    title: "Rainbow Vegetable Stir-Fry",
    ingredients: [
      "1 red bell pepper, julienned",
      "1 yellow bell pepper, julienned",
      "1 head broccoli, florets",
      "2 medium carrots, julienned",
      "1 cup snap peas",
      "3 cloves garlic, minced",
      "1 thumb ginger, grated",
      "3 tbsp soy sauce",
      "1 tbsp hoisin sauce",
      "1 tsp sesame oil",
      "Sesame seeds to garnish",
      "Steamed rice or noodles to serve",
    ],
    instructions: [
      "Mix soy sauce, hoisin, and sesame oil in a small bowl to make the sauce.",
      "Heat a wok over very high heat until nearly smoking; add a neutral oil.",
      "Add the hardest vegetables first (carrots, broccoli) and stir-fry for 2 minutes.",
      "Add the peppers and snap peas; cook for another 2 minutes.",
      "Push vegetables to the side, add garlic and ginger, and fry until fragrant — about 30 seconds.",
      "Pour the sauce over everything and toss to coat.",
      "Serve immediately over rice or noodles, garnished with sesame seeds.",
    ],
  },
  {
    id: "caesar-salad",
    category: "mixed",
    title: "Classic Caesar Salad with Homemade Dressing",
    ingredients: [
      "2 heads romaine lettuce, chopped",
      "100 g sourdough, torn into croutons",
      "50 g Parmesan shavings",
      "2 egg yolks",
      "2 garlic cloves",
      "1 tsp Dijon mustard",
      "1 tbsp Worcestershire sauce",
      "Juice of 1 lemon",
      "100 ml olive oil",
      "Salt & black pepper",
    ],
    instructions: [
      "Toss sourdough pieces with olive oil, salt, and garlic in a baking tray. Bake at 200 °C for 12 minutes until golden.",
      "Whisk together egg yolks, mustard, garlic, Worcestershire sauce, and lemon juice.",
      "Slowly drizzle in olive oil while whisking until thick and emulsified. Season to taste.",
      "Toss romaine lettuce with just enough dressing to coat every leaf.",
      "Top with homemade croutons and Parmesan shavings.",
      "Serve immediately.",
    ],
  },
];

/**
 * Analyse the dominant hue of an uploaded image using the Canvas API.
 * Returns one of: 'red', 'green', 'yellow', 'brown', 'mixed'
 */
export function analyzeImageColor(imageDataUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      // Sample a smaller version for speed
      const SIZE = 60;
      canvas.width = SIZE;
      canvas.height = SIZE;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, SIZE, SIZE);
      const { data } = ctx.getImageData(0, 0, SIZE, SIZE);

      let rSum = 0, gSum = 0, bSum = 0, count = 0;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
        if (a < 128) continue; // skip transparent
        rSum += r; gSum += g; bSum += b; count++;
      }

      if (count === 0) { resolve("mixed"); return; }

      const r = rSum / count;
      const g = gSum / count;
      const b = bSum / count;

      // Convert RGB → HSL
      const rN = r / 255, gN = g / 255, bN = b / 255;
      const max = Math.max(rN, gN, bN);
      const min = Math.min(rN, gN, bN);
      const l = (max + min) / 2;
      let h = 0, s = 0;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case rN: h = ((gN - bN) / d + (gN < bN ? 6 : 0)) / 6; break;
          case gN: h = ((bN - rN) / d + 2) / 6; break;
          case bN: h = ((rN - gN) / d + 4) / 6; break;
        }
      }

      const hDeg = h * 360;

      // Low saturation or dark → brown / protein heavy
      if (s < 0.15 || l < 0.25) { resolve("brown"); return; }

      // Map hue to category
      if (hDeg >= 15 && hDeg < 45)  { resolve("yellow"); return; } // orange-yellow
      if (hDeg >= 45 && hDeg < 75)  { resolve("yellow"); return; } // yellow-green
      if (hDeg >= 75 && hDeg < 165) { resolve("green");  return; } // green
      if (hDeg >= 165 && hDeg < 255){ resolve("mixed");  return; } // cyan/blue
      if (hDeg >= 255 && hDeg < 315){ resolve("brown");  return; } // purple → earthy
      // reds (0–15 and 315–360)
      resolve("red");
    };
    img.onerror = () => resolve("mixed");
    img.src = imageDataUrl;
  });
}

/**
 * Pick the best matching recipe for a given colour category, with some randomness.
 */
export function getRecipeByColor(colorCategory) {
  const matches = RECIPES.filter((r) => r.category === colorCategory);
  const pool = matches.length > 0 ? matches : RECIPES.filter((r) => r.category === "mixed");
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Match textual ingredients to the closest recipe.
 */
export function getRecipeByIngredients(ingredientsArr) {
  const query = ingredientsArr.map((i) => i.toLowerCase());

  let bestScore = -1;
  let bestRecipe = RECIPES[0];

  for (const recipe of RECIPES) {
    const allText = [
      ...recipe.ingredients,
      recipe.title,
    ].join(" ").toLowerCase();

    const score = query.reduce((acc, ing) => acc + (allText.includes(ing) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      bestRecipe = recipe;
    }
  }

  // If no match at all, return a random recipe
  if (bestScore === 0) {
    return RECIPES[Math.floor(Math.random() * RECIPES.length)];
  }

  return bestRecipe;
}
