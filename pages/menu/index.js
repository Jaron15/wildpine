import MenuIcons from '@/components/MenuIcons'
import MenuItem from '@/components/MenuItem'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'

function Menu() {
  const menuItems = [
    {
      category: "Coffee",
      subcategory: "Specialty Lattes",
      items: [
        {
          name: "Goddess Energy",
          description: "White Chocolate, Vanilla, Brown Sugar Cinnamon.",
          sizes: [{ size: "16oz", price: "5.75" }, { size: "24oz", price: "6.75" }]
        },
        {
          name: "Stranger Things",
          description: "Dark Chocolate, Caramel, Cherry, Blackberry.",
          sizes: [{ size: "16oz", price: "5.75" }, { size: "24oz", price: "6.75" }]
        },
        {
          name: "Carpe Diem",
          description: "Cherry, Pistachio.",
          sizes: [{ size: "16oz", price: "5.75" }, { size: "24oz", price: "6.75" }]
        },
        {
          name: "Hope Dealer",
          description: "White Chocolate, Lavender.",
          sizes: [{ size: "16oz", price: "5.75" }, { size: "24oz", price: "6.75" }]
        },
        {
          name: "Joe Dirt",
          description: "Dirty Chai.",
          sizes: [{ size: "16oz", price: "5.75" }, { size: "24oz", price: "6.75" }]
        },
        {
          name: "Espresso Lab",
          description: "Simple Syrup, Milk of Choice.",
          sizes: [{ size: "16oz", price: "5.75" }, { size: "24oz", price: "6.75" }]
        },
        {
          name: "Cannon Beach",
          description: "Salted Caramel, Chocolate, Soft Top with Caramel Drizzle.",
          sizes: [{ size: "16oz", price: "5.75" }, { size: "24oz", price: "6.75" }]
        },
        {
          name: "It's Fine",
          description: "White Chocolate, Hazelnut, Caramel Drizzle.",
          sizes: [{ size: "16oz", price: "5.75" }, { size: "24oz", price: "6.75" }]
        },
        {
          name: "Campfire",
          description: "Chocolate, Caramel, Brown Sugar Cinnamon.",
          sizes: [{ size: "16oz", price: "5.75" }, { size: "24oz", price: "6.75" }]
        },
        {
          name: "Abducted",
          description: "Dark Chocolate, White Chocolate, Caramel, Vanilla.",
          sizes: [{ size: "16oz", price: "5.75" }, { size: "24oz", price: "6.75" }]
        },
        {
          name: "Ube Latte",
          description: "Purple Yam with Hints of Nutty Vanilla.",
          sizes: [{ size: "16oz", price: "5.75" }, { size: "24oz", price: "6.75" }]
        },
        {
          name: "Wild Pine",
          description: "House-made Rosemary and Vanilla Syrup.",
          sizes: [{ size: "16oz", price: "5.75" }, { size: "24oz", price: "6.75" }]
        }
      ]
    },
    {
      category: "Coffee",
      subcategory: "Back to the Basics",
      items: [
        {
          name: "Latte",
          sizes: [{ size: "16oz", price: "4.75" }, { size: "24oz", price: "5.75" }]
        },
        {
          name: "Mocha",
          sizes: [{ size: "16oz", price: "5.50" }, { size: "24oz", price: "6.50" }]
        },
        {
          name: "Americano",
          sizes: [{ size: "16oz", price: "4.00" }, { size: "24oz", price: "5.00" }]
        },
        {
          name: "Drip Coffee",
          sizes: [{ size: "16oz", price: "3.75" }, { size: "24oz", price: "4.50" }]
        },
        {
          name: "Affogato",
          sizes: [{ size: "Single", price: "6.00" }]
        },
        {
          name: "Cold Brew",
          sizes: [{ size: "16oz", price: "4.75" }, { size: "24oz", price: "5.50" }]
        },
        {
          name: "Nitro Cold Brew",
          description: "12oz",
          sizes: [{ size: "Single", price: "5.50" }]
        },
        {
          name: "Double Espresso",
          sizes: [{ size: "Single", price: "3.50" }]
        },
        {
          name: "Extras",
          sizes: [{ size: "Exra Shot", price: "1.00" }, { size: "Sub Milk", price: ".85" }, { size: "Add Flavor", price: ".75" }]
        }
      ]
    },
    {
      category: "Tea",
      subcategory: "Specialty Teas",
      items: [
        {
          name: "Liquid Sunshine",
          description: "Green Tea, Raspberry, Orange.",
          sizes: [{ size: "16oz", price: "4.75" }, { size: "24oz", price: "5.50" }]
        },
        {
          name: "Oregon Summer",
          description: "Black Tea, Blackberry, Raspberry, Topped with Blackberries.",
          sizes: [{ size: "16oz", price: "4.75" }, { size: "24oz", price: "5.50" }]
        },
        {
          name: "Social Butterfly",
          description: "Butterfly Pea Powder, Peach, Rose, Milk.",
          sizes: [{ size: "16oz", price: "4.75" }, { size: "24oz", price: "5.50" }]
        },
        {
          name: "Living Aloha",
          description: "Green Tea, Guava, Pineapple, Peach.",
          sizes: [{ size: "16oz", price: "4.75" }, { size: "24oz", price: "5.50" }]
        }
      ]
    },
    {
      category: "Tea",
      subcategory: "Classic Teas",
      items: [
        {
          name: "Tiger Chai",
          description: "Black Spiced Chai.",
          sizes: [{ size: "16oz", price: "4.75" }, { size: "24oz", price: "5.75" }]
        },
        {
          name: "Tortoise Chai",
          description: "Green Tea Chai.",
          sizes: [{ size: "16oz", price: "4.75" }, { size: "24oz", price: "5.75" }]
        },
        {
          name: "Matcha Latte",
          description: "Ceremonial Grade.",
          sizes: [{ size: "16oz", price: "5.25" }, { size: "24oz", price: "6.00" }]
        },
        {
          name: "Black Tea",
          sizes: [{ size: "16oz", price: "3.50" }, { size: "24oz", price: "4.25" }]
        },
        {
          name: "Green Tea",
          sizes: [{ size: "16oz", price: "3.50" }, { size: "24oz", price: "4.25" }]
        }
      ]
    },
    {
      category: "Energy",
      subcategory: "Energize Me",
      items: [
        {
          name: "Atlantis",
          description: "Blue Lotus, Lavender, Kiwi, Coconut.",
          sizes: [{ size: "24oz", price: "6.75" }]
        },
        {
          name: "Island Time",
          description: "Purple Lotus, Passion Fruit, Orange, Guava.",
          sizes: [{ size: "24oz", price: "6.75" }]
        },
        {
          name: "Dragon Eye",
          description: "Gold Lotus, Pineapple, Mango, Raspberry.",
          sizes: [{ size: "24oz", price: "6.75" }]
        },
        {
          name: "Wonder Woman",
          description: "Gold Lotus, Wild Strawberry, Blackberry, Sparkles.",
          sizes: [{ size: "24oz", price: "6.75" }]
        },
        {
          name: "Treebeard",
          description: "Purple Lotus, Kiwi, Peach, Wild Strawberry.",
          sizes: [{ size: "24oz", price: "6.75" }]
        },
        {
          name: "Godzilla Melee",
          description: "Blue Lotus, Blackberry, Raspberry, Guana, Sparkles.",
          sizes: [{ size: "24oz", price: "6.75" }]
        },
        {
          name: "Phoenix Lights",
          description: "Gold Lotus, Cherry, Orange, Vanilla, Orange Juice.",
          sizes: [{ size: "24oz", price: "6.75" }]
        },
        {
          name: "Nebula",
          description: "Purple Lotus, Lavender, Rose, Sparkles.",
          sizes: [{ size: "24oz", price: "6.75" }]
        },
        {
          name: "Brain Blast",
          description: "Gold Lotus, Peach, Watermelon.",
          sizes: [{ size: "24oz", price: "6.75" }]
        },
        {
          name: "Euphoric",
          description: "Gold Lotus, Raspberry, Blackberry, Kiwi.",
          sizes: [{ size: "24oz", price: "6.75" }]
        },
      ]
    },
    {
      category: "Food",
      subcategory: "Snackies",
      subcategories: [
        {
          name: "Breakfast",
          items: [
            {
              name: "Bagel & Cream Cheese",
              description: "Plain or Everything. Gluten Free + 1.50. Dairy Free Cream Cheese + 1.00.",
              sizes: [{ size: "Single", price: "4.00" }]
            },
            {
              name: "Waffles on a Stick",
              description: "3 Waffles with Powdered Sugar & Syrup. Served until 1pm.",
              sizes: [{ size: "Single", price: "7.50" }]
            },
            {
              name: "Egg and Cheese Sandwich",
              description: "Egg and Cheese on an English Muffin.",
              sizes: [{ size: "Single", price: "5.75" }]
            },
            {
              name: "Sausage, Egg and Cheese Sandwich",
              description: "Sausage, Egg and Cheese on an English Muffin.",
              sizes: [{ size: "Single", price: "6.75" }]
            },
            {
              name: "Bacon, Egg and Cheese Sandwich",
              description: "Bacon, Egg and Cheese on an English Muffin.",
              sizes: [{ size: "Single", price: "6.75" }]
            },
            {
              name: "Chicken, Egg and Cheese Sandwich",
              description: "Chicken, Egg and Cheese on an English Muffin.",
              sizes: [{ size: "Single", price: "7.75" }]
            }
          ]
        },
        {
          name: "Lunch",
          items: [
            {
              name: "Turkey Pesto Sandwich",
              description: "Sliced Turkey, Pesto, Bacon, Provolone Cheese.",
              sizes: [{ size: "Single", price: "8.75" }]
            },
            {
              name: "Chicken Special Sandwich",
              description: "Sliced Chicken, Cucumbers, Boursin Cheese.",
              sizes: [{ size: "Single", price: "8.75" }]
            }
          ]
        }
      ]
    }
    
  ];
  const router = useRouter();
  const { filter } = router.query; 
  useEffect(() => {
    if (filter) {
      setSelectedFilters(filter.split(","));
    }
  }, [filter]);



  const [selectedFilters, setSelectedFilters] = useState([]);
  const toggleFilter = (selection) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(selection)
        ? prevFilters.filter((f) => f !== selection) // Remove filter if it's already selected
        : [...prevFilters, selection] // Add filter if not selected
    );
  };

  const filteredMenu =
    selectedFilters.length === 0
      ? menuItems // Show all if no filters selected
      : menuItems.filter((category) => selectedFilters.includes(category.category));


  return (
    <div className="w-full flex flex-col items-center py-6 bg-background font-sans min-h-screen">
       {/* Filter Buttons */}
      <MenuIcons selections={selectedFilters} toggleFilter={toggleFilter}/>
        {/* Render All Categories and Subcategories */}
        {filteredMenu.map((category, categoryIndex) => (
  <div key={categoryIndex} className="w-full max-w-5xl px-4 sm:px-6 mb-8">
    {/* Category Header */}
    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center">{category.subcategory}</h1>

    {/* Check if subcategories exist */}
    {category.subcategories ? (
      category.subcategories.map((subcategory, subIndex) => (
        <div key={subIndex} className="mb-6">
          {/* Subcategory Header */}
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">{subcategory.name}</h2>

          {/* Subcategory Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
            {subcategory.items.map((item, itemIndex) => (
              <MenuItem key={itemIndex} item={item} />
            ))}
          </div>
        </div>
      ))
    ) : (
      /* Render items directly if no subcategories */
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
        {category.items.map((item, itemIndex) => (
          <MenuItem key={itemIndex} item={item} />
        ))}
      </div>
    )}
  </div>
))}

    </div>
  );
};

export default Menu