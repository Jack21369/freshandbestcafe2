import { Injectable } from '@angular/core';

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuCategories: MenuCategory[] = [
    {
      name: 'Breakfast',
      items: [
        {
          name: 'Breakfast Wrap',
          description: 'Spinach, egg, cheese, bacon, avocado and salsa in plain tortilla. Contains dairy.',
          price: 8.86
        },
        {
          name: 'Bagel Club Sandwich',
          description: 'Mayo, lettuce, tomato, avocado, turkey, bacon and cheese.',
          price: 8.86
        },
        {
          name: 'Egg and Cheese Sandwich',
          description: '',
          price: 6.18
        },
        {
          name: 'Bagel Creamcheese',
          description: '',
          price: 4.56
        }
      ]
    },
    {
      name: 'Salads',
      items: [
        {
          name: 'Avocado Salad',
          description: 'Romaine and mixed greens, cucumber, tomato, red onion, carrot and sunflower seeds. Served with housemade balsamic vinaigrette.',
          price: 11.28
        },
        {
          name: 'Chicken Salad',
          description: 'Same ingredients with chicken.',
          price: 13.43
        },
        {
          name: 'Tuna Salad',
          description: 'Same ingredients with tuna.',
          price: 12.62
        },
        {
          name: 'Vietnamese Tofu Salad',
          description: 'Shredded cabbage, celery, carrot, mint, cilantro, red onion, lemon; peanut and dried shallots. Served with fish sauce. Contains peanuts.',
          price: 13.16,
          isVegetarian: true
        },
        {
          name: 'Vietnamese Chicken Salad',
          description: 'Shredded cabbage, celery, carrot, mint, cilantro, onion, lemon; peanut and dried shalloths. Served with fish sauce. Contains peanuts.',
          price: 13.43
        },
        {
          name: 'Vietnamese Shrimp Salad',
          description: 'Same as chicken salad but with shrimp.',
          price: 13.69
        }
      ]
    },
    {
      name: 'Asian Kale Salad',
      items: [
        {
          name: 'Teriyaki Chicken Salad',
          description: 'Chopped kale and romaine, carrot, toasted walnut, chow mein noodles. Served with sesame dressing. Contains nuts.',
          price: 13.43
        },
        {
          name: 'Tofu Salad',
          description: 'Same as above with tofu.',
          price: 13.16,
          isVegetarian: true
        },
        {
          name: 'Tuna Salad',
          description: 'Same as above with tuna.',
          price: 13.16
        },
        {
          name: 'Avocado Salad',
          description: 'Same as above with avocado.',
          price: 11.28
        }
      ]
    },
    {
      name: 'Vermicelli Bowl',
      items: [
        {
          name: 'Chicken Vermicelli Bowl',
          description: 'Shredded lettuce, cucumber, mint, cilantro, pickled carrot; topped with peanut and dried shallot. Served with fish sauce. Contains nuts.',
          price: 12.84
        },
        {
          name: 'Pork Vermicelli Bowl',
          description: 'Same as chicken version with pork.',
          price: 12.84
        },
        {
          name: 'Tofu Vermicelli Bowl',
          description: 'Same as chicken version with tofu.',
          price: 12.84,
          isVegetarian: true
        }
      ]
    },
    {
      name: 'Vietnamese Sandwich',
      items: [
        {
          name: 'Grilled Chicken Sandwich',
          description: 'Mayo, cucumber, jalapeno, pickled carrot, soy sauce and cilantro.',
          price: 11.01
        },
        {
          name: 'Grilled Pork Sandwich',
          description: 'Mayo, pate (pork liver), cucumber, jalapeno, pickled carrot, soy sauce and cilantro.',
          price: 11.01
        },
        {
          name: 'Combo Sandwich',
          description: 'Mayo, pate, cucumber, jalapeno, pickled carrot, soy sauce.',
          price: 11.01
        },
        {
          name: 'Teriyaki Chicken Sandwich',
          description: 'Mayo, cucumber, jalapeno, pickled carrot, soy sauce and cilantro with teriyaki flavor.',
          price: 11.01
        },
        {
          name: 'Coconut Pork Sandwich',
          description: 'Mayo, pate (pork liver), cucumber, jalapeno, pickled carrot, soy sauce and cilantro with coconut flavor.',
          price: 11.01
        },
        {
          name: 'BBQ Pork Sandwich',
          description: 'Mayo, pate (pork liver), cucumber, jalapeno, pickled carrot, soy sauce and cilantro with BBQ flavor.',
          price: 11.01
        },
        {
          name: 'Spicy Chicken Sandwich',
          description: 'Mayo, cucumber, jalapeno, pickled carrot, soy sauce and cilantro with extra spice.',
          price: 11.01,
          isSpicy: true
        },
        {
          name: 'Curry Tofu Sheets Sandwich',
          description: 'Mayo, cucumber, jalapeno, pickled carrot, soy sauce and cilantro. Spicy and vegetarian.',
          price: 11.01,
          isVegetarian: true,
          isSpicy: true
        },
        {
          name: 'Tofu Mushroom Sandwich',
          description: 'Mayo, cucumber, jalapeno, pickled carrot, soy sauce and cilantro with mushrooms.',
          price: 11.01,
          isVegetarian: true
        }
      ]
    },
    {
      name: 'Summer Rolls',
      items: [
        {
          name: '3 Pieces Shrimp Rolls',
          description: 'Lettuce, rice noodle, mint, cilantro, pickled carrot in rice paper. Peanut dipping sauce. Contains nuts.',
          price: 11.81
        },
        {
          name: '3 Pieces Chicken Rolls',
          description: 'Same as above with chicken.',
          price: 11.55
        },
        {
          name: '3 Pieces Tofu Rolls',
          description: 'Same as above with tofu.',
          price: 11.28,
          isVegetarian: true
        },
        {
          name: '3 Pieces Avocado Rolls',
          description: 'Same as above with avocado.',
          price: 11.01
        }
      ]
    },
    {
      name: 'Classic Sandwich',
      items: [
        {
          name: 'Club Sandwich',
          description: 'Bacon, turkey, and cheese. Mayo, mustard, lettuce, tomato, pickle, red onion.',
          price: 11.01
        },
        {
          name: 'Bacon and Avocado Sandwich',
          description: 'Mayo, mustard, lettuce, tomato, pickle, red onion.',
          price: 10.20
        },
        {
          name: 'Tuna Sandwich',
          description: 'Mayo, mustard, lettuce, tomato, pickle, red onion with tuna.',
          price: 9.94
        },
        {
          name: 'BLT Sandwich',
          description: 'Mayo, lettuce, tomato, and bacon.',
          price: 8.59
        },
        {
          name: 'Turkey Breast Sandwich',
          description: 'Mayo, mustard, lettuce, tomato, pickle, red onion.',
          price: 9.13
        },
        {
          name: 'Roasted Chicken Sandwich',
          description: 'Mayo, mustard, lettuce, tomato, pickle, red onion with chicken.',
          price: 10.20
        },
        {
          name: 'Veggie and Avocado Sandwich',
          description: 'Mayo, mustard, lettuce, tomato, cucumber, carrot, pickle, red onion and avocado. Vegetarian.',
          price: 9.94,
          isVegetarian: true
        },
        {
          name: 'Roast Beef Sandwich',
          description: 'Horseradish, honey mustard, mixed greens, roast beef, Swiss cheese, tomato, onion.',
          price: 11.01
        }
      ]
    },
    {
      name: 'Wraps',
      items: [
        {
          name: 'California Wrap',
          description: 'Mixed greens, spicy mayo, turkey, cheese, bacon, avocado, tomato.',
          price: 11.76
        },
        {
          name: 'Apple Tuna Wrap',
          description: 'Mixed greens, shredded cheese, red onion, carrot, tomato, apple, tuna mix. Contains mayonnaise.',
          price: 11.76
        },
        {
          name: 'Chicken Wrap',
          description: 'Mixed greens, spicy mayo, chicken, avocado, carrot, tomato, cucumber, jalapeno, onion.',
          price: 11.76
        }
      ]
    },
    {
      name: 'Fresh Juice',
      items: [
        {
          name: '20 Oz. Mixed Vegetable Juice',
          description: 'Apple, carrot, ginger, and beet.',
          price: 9.13
        },
        {
          name: '20 Oz. Radiant Juice',
          description: 'Apple, orange, carrot, and ginger.',
          price: 9.13
        },
        {
          name: '20 Oz. Cleansing Juice',
          description: 'Carrot, beet, cucumber, and parsley.',
          price: 9.13
        },
        {
          name: '20 Oz. Double Spicy Juice',
          description: 'Apple, beet, lemon, ginger, and cayenne pepper, served with ice.',
          price: 9.94
        },
        {
          name: '20 Oz. Mean Green Juice',
          description: 'Kale, cucumber, celery, lemon, ginger, and apple.',
          price: 9.94
        },
        {
          name: '20 Oz. Green Power Juice',
          description: 'Spinach, kale, apple, carrot, and ginger.',
          price: 9.13
        },
        {
          name: '20 Oz. Orange Carrot Ginger Juice',
          description: 'Orange, carrot, and ginger.',
          price: 9.94
        },
        {
          name: '20 Oz. The Mixed Green Juice',
          description: 'Apple, pear, cucumber, kale, and mint.',
          price: 10.20
        },
        {
          name: '20 Oz. Pineapple Sunrise with Ice Juice',
          description: 'Pineapple, apple, beet, orange, and cayenne pepper.',
          price: 10.20
        }
      ]
    },
    {
      name: 'Smoothies',
      items: [
        {
          name: 'Pineapple Coconut Smoothie',
          description: 'Coconut water/cream, kale, cashew, honey, pineapple, topped with coconut flakes. Contains nuts.',
          price: 9.57
        },
        {
          name: 'Tropical Green Smoothie',
          description: 'Spinach, parsley, banana, mango, pineapple, blended with soy milk.',
          price: 8.99
        },
        {
          name: 'Blueberry Avocado Smoothie',
          description: 'Spinach, avocado, blueberry, whey protein, blended with almond milk.',
          price: 9.57
        },
        {
          name: 'Minty Peach Pineapple Smoothie',
          description: 'Orange, yogurt, kale, mint, honey, peach, and pineapple.',
          price: 8.99
        },
        {
          name: 'Ginger Peach Green Smoothie',
          description: 'Spinach, honey, ginger, and peach, blended with almond milk.',
          price: 7.46
        },
        {
          name: '(4G) Berries Peanut Butter Smoothie',
          description: 'Almond milk, spinach, peanut butter, banana, and mixed berries.',
          price: 7.46
        },
        {
          name: '(3G) Berries Green Smoothie',
          description: 'Almond milk, spinach, mixed berries, mango, and banana.',
          price: 7.46
        },
        {
          name: '(2G) Double Green Smoothie',
          description: 'Kale, spinach, banana, and pear with almond milk.',
          price: 7.46
        },
        {
          name: 'Banana Strawberry Smoothie',
          description: 'Blended with apple juice.',
          price: 7.25
        },
        {
          name: 'Banana Pineapple Smoothie',
          description: 'Blended with apple juice.',
          price: 7.25
        },
        {
          name: 'Peach Pineapple Smoothie',
          description: 'Blended with apple juice.',
          price: 7.25
        },
        {
          name: 'Mango Pineapple Smoothie',
          description: 'Blended with apple juice.',
          price: 7.25
        },
        {
          name: 'Mango Strawberry Smoothie',
          description: 'Blended with apple juice.',
          price: 7.25
        },
        {
          name: 'Strawberry Pineapple Smoothie',
          description: 'Blended with apple juice.',
          price: 7.25
        },
        {
          name: 'Mixed Berries Smoothie',
          description: 'Blended with apple juice.',
          price: 7.25
        }
      ]
    },
    {
      name: 'Acai Shake',
      items: [
        {
          name: 'Acai Protein Shake',
          description: 'Blend of almond milk with whey protein, peanut butter, strawberry, and acai.',
          price: 8.06
        }
      ]
    },
    {
      name: 'Iced Drinks',
      items: [
        {
          name: 'Thai Iced Tea',
          description: 'Sweetened black tea with half & half.',
          price: 6.18
        },
        {
          name: 'Vietnamese Iced Coffee',
          description: 'Strong black coffee with sweetened condensed milk.',
          price: 6.39
        },
        {
          name: 'Iced Cold Brew Coffee',
          description: 'Option for sugar or milk added.',
          price: 4.30
        }
      ]
    },
    {
      name: 'Hot Drinks',
      items: [
        {
          name: 'Chai Tea Latte',
          description: '',
          price: 0.00
        },
        {
          name: 'Dripped Coffee',
          description: 'French - Dark Roast.',
          price: 0.00
        }
      ]
    },
    {
      name: 'Rice Bowl',
      items: [
        {
          name: 'Tofu Rice Bowl',
          description: '',
          price: 15.57,
          isVegetarian: true
        },
        {
          name: 'Pork Rice Bowl',
          description: '',
          price: 15.57
        },
        {
          name: 'Chicken Rice Bowl',
          description: '',
          price: 15.57
        }
      ]
    }
  ];

  getMenuCategories(): MenuCategory[] {
    return this.menuCategories;
  }

  getCategory(categoryName: string): MenuCategory | undefined {
    return this.menuCategories.find(category => category.name === categoryName);
  }

  getAllItems(): MenuItem[] {
    return this.menuCategories.flatMap(category => category.items);
  }
}
