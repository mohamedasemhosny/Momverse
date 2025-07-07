import React from "react";

const foodGuidelines = [
  {
    food: "Baby Cereal",
    preparation:
      "Prepare with a little breast milk, formula or water. Make sure it's smooth.",
    age: "4 months+",
  },
  {
    food: "Veggies",
    preparation:
      "Boil, boil or steam, then purée (pumpkin, carrot, sweet potato, potato, zucchini).",
    age: "4–8 months+",
  },
  {
    food: "Veggies",
    preparation:
      "Steam, boil or roast (broccoli, spinach, cauliflower, mushrooms, peas, corn).",
    age: "6–12 months+",
  },
  {
    food: "Avocado",
    preparation: "Roast in small chunks or mash with breast milk or formula.",
    age: "6 months+",
  },
  {
    food: "Eggs (yolk only)",
    preparation: "Boil and mash egg yolk with breast milk or formula.",
    age: "6 months+",
  },
  {
    food: "Toast",
    preparation:
      "Butter and cut into soldiers for baby to suck on. Avoid if family history of allergies.",
    age: "8 months+",
  },
  {
    food: "Meat",
    preparation:
      "Babies begin to lose their iron stores from around 6 months. Start with lean beef or lamb, minced or puréed.",
    age: "6–7 months+",
  },
  {
    food: "Chicken",
    preparation:
      "Chicken is a great source of protein. Remove skin, boil or steam. Purée or shred.",
    age: "6–7 months+",
  },
  {
    food: "Cheese",
    preparation: "Full-fat cheese can be mixed in with veggie meals.",
    age: "8 months+",
  },
  {
    food: "Yoghurt",
    preparation:
      "Opt for Greek yoghurt that is full-fat, unsweetened and natural. You can also add to veggie purées or mashed fruit.",
    age: "8 months+",
  },
  {
    food: "Eggs (whole egg)",
    preparation:
      "Serve scrambled, poached, or boiled. Introduce after 12 months if there's a family history of allergies.",
    age: "12 months+",
  },
  {
    food: "Honey, Jam, Peanut Butter",
    preparation:
      "Spreads should be avoided before 12 months due to high sugar + high allergy potential.",
    age: "12 months+",
  },
];

const Feeding = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-color-bg to-purple-100 h-[calc(100vh-75px)]">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">
          Baby Food Guidelines
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodGuidelines.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-5 border border-blue-200 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold text-black mb-2">
                {item.food}
              </h2>
              <p className="text-gray-500 mb-3">{item.preparation}</p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Suitable Age:</span> {item.age}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feeding;
