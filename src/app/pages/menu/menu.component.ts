import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: number;
  name: string;
  price?: string | number;
  description?: string;
  options?: {name: string, price: string | number}[];
  addOns?: {name: string, price: string | number}[];
}

interface MenuSection {
  title: string;
  description?: string;
  items: MenuItem[];
  priceInfo?: string;
}

interface MenuCategory {
  id: string;
  displayName: string;
  sections: MenuSection[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  activeCategory: string = 'vietnamese-classics';
  categories = [
    { id: 'vietnamese-classics', name: 'Vietnamese Classics' },
    { id: 'deli-classics', name: 'Deli Classics' },
    { id: 'salads', name: 'Salads' },
    { id: 'drinks-dessert', name: 'Drinks & Dessert' }
  ];
  
  menuData: MenuCategory[] = [];
  
  // General disclaimer for the entire menu
  generalDisclaimer: string = 'To place a large order, please allow 3 days advance notice.';
  
  constructor() {}
  
  ngOnInit() {
    // Load only the active category initially
    this.loadCategoryData(this.activeCategory);
  }
  
  setActiveCategory(categoryId: string) {
    if (this.activeCategory === categoryId) return;
    
    this.activeCategory = categoryId;
    this.loadCategoryData(categoryId);
  }
  
  // This simulates fetching menu data from a service
  // In a real app, this would come from an API or data service
  private loadCategoryData(categoryId: string) {
    // Get data for the selected category (in a real app this would be from a service)
    this.menuData = MENU_DATA.filter(category => category.id === categoryId);
  }
}

// Menu data moved from HTML to TypeScript
// This could also be stored in a separate file or fetched from an API
const MENU_DATA: MenuCategory[] = [
  {
    id: 'vietnamese-classics',
    displayName: 'Vietnamese Classics',
    sections: [
      {
        title: 'Vietnamese Sandwich',
        priceInfo: '$9.95',
        description: 'Include: mayo, cucumber, jalapeno, pickled carrot, soy sauce & cilantro',
        items: [
          { id: 1, name: 'Grilled Chicken' },
          { id: 2, name: 'Spicy Chicken' },
          { id: 3, name: 'Teriyaki Chicken' },
          { id: 4, name: 'Grilled Pork*' },
          { id: 5, name: 'BBQ Pork*' },
          { id: 6, name: 'Coconut Pork*', description: '(pork stewed in coconut juice)' },
          { id: 7, name: 'Combo*', description: '(cold cuts of pork roll, ham & headcheese)' }
        ]
      },
      {
        title: 'Vegetarian Sandwich',
        priceInfo: '$9.95',
        description: 'Include: mayo, cucumber, jalapeno, pickled carrot, soy sauce & cilantro',
        items: [
          { id: 1, name: 'Spicy Lemongrass Seitan' },
          { id: 2, name: 'Tofu Mushroom' },
          { id: 3, name: 'Curry Tofu Sheets' }
        ]
      },
      {
        title: 'Vermicelli Bowl',
        priceInfo: '$11.95',
        description: '(shredded lettuce, cucumber, mint, cilantro, pickled carrot, peanut, dried shallot. Served with fish sauce)',
        items: [
          { id: 1, name: 'Chicken' },
          { id: 2, name: 'Pork' },
          { id: 3, name: 'Tofu' }
        ]
      },
      {
        title: 'Summer Rolls (3)',
        description: '(lettuce, vermicelli, mint, cilantro & pickled carrot in rice paper wraps. Served with peanut dipping sauce)',
        items: [
          { id: 1, name: 'Shrimp Rolls', price: '$10' },
          { id: 2, name: 'Chicken Rolls', price: '$10' },
          { id: 3, name: 'Tofu Rolls', price: '$10' },
          { id: 4, name: 'Avocado Rolls', price: '$10' }
        ],
        priceInfo: '+ avocado for $1.50'
      },
      {
        title: 'Rice Plate',
        priceInfo: '$12.95',
        items: [
          { id: 1, name: 'Grilled Chicken' },
          { id: 2, name: 'Grilled Pork' },
          { id: 3, name: 'Chicken & Pork' }
        ],
        description: 'Add a fried egg for $1.50'
      }
    ]
  },
  {
    id: 'deli-classics',
    displayName: 'Deli Classics',
    sections: [
      {
        title: 'Breakfast',
        items: [
          {
            id: 1,
            name: 'Egg & Cheese Sandwich',
            options: [
              {name: 'On Bagel', price: '$5.45'},
              {name: 'On Croissant', price: '$6.50'}
            ],
            addOns: [
              {name: 'Add Turkey, Bacon or Pork Sausage', price: '+$1.25'},
              {name: 'Add Avocado', price: '+$1.50'}
            ]
          },
          {
            id: 2,
            name: 'Breakfast Wrap',
            price: '$7.50',
            description: '(spinach, egg, cheese, bacon, avocado & salsa)'
          },
          {
            id: 3,
            name: 'Bagel Club Sandwich',
            price: '$7.25',
            description: '(mayo, lettuce, tomato, avocado, turkey, bacon & cheese)'
          },
          {
            id: 4,
            name: 'Bagel Creamcheese',
            price: '$3.50'
          }
        ]
      },
      {
        title: 'Classic Sandwich',
        description: 'Choice of Breads: sliced wheat bread, French Roll or Dutch Crunch Roll\nInclude: mayo, mustard, lettuce, tomato, pickle & onion',
        items: [
          { id: 1, name: 'Turkey Breast', price: '$7.95' },
          { id: 2, name: 'Roasted Chicken', price: '$8.95' },
          { id: 3, name: 'Ham', price: '$7.50' },
          { id: 4, name: 'Veggie & Avocado', price: '$7.95' },
          { id: 5, name: 'Club (bacon, turkey & cheese)', price: '$9.25' },
          { id: 6, name: 'Tuna', price: '$7.95' },
          { id: 7, name: 'BLT (with mayo)', price: '$7.25' },
          { id: 8, name: '*Roast Beef', price: '$9.25', description: '(horseradish, honey mustard, spring mix, tomato, onion & Swiss cheese)' }
        ]
      },
      {
        title: 'Add-ons',
        items: [
          { 
            id: 1, 
            name: '+ cheese for $1.00',
            description: '(American, Pepper Jack, Swiss, Cheddar)'
          },
          { 
            id: 2, 
            name: '+ avocado for $1.50'
          }
        ]
      },
      {
        title: 'Wrap',
        priceInfo: '$9.95',
        items: [
          { 
            id: 1, 
            name: 'California Wrap',
            description: '(spring mix, spicy mayo, turkey, cheese, bacon, avocado, & tomato)'
          },
          { 
            id: 2, 
            name: 'Apple Tuna Wrap',
            description: '(spring mix, cheese, onion, carrot, tomato, apple & tuna mix)'
          },
          { 
            id: 3, 
            name: 'Chicken & Avocado Wrap',
            description: '(spring mix, spicy mayo, chicken, avocado, carrot, tomato, cucumber, jalapeno, & onion)'
          }
        ]
      }
    ]
  },
  {
    id: 'salads',
    displayName: 'Salads',
    sections: [
      {
        title: 'Green Salad',
        description: '(romaine & spring mix, cucumber, tomato, onion, carrot, sunflower seeds. Served w/balsamic vinaigrette)',
        items: [
          {
            id: 1,
            name: 'Avocado',
            price: '$9.95'
          },
          {
            id: 2,
            name: 'Chicken',
            price: '$11.75'
          },
          {
            id: 3,
            name: 'Tuna',
            price: '$11.25'
          }
        ]
      },
      {
        title: 'Vietnamese Salad',
        description: '(shredded cabbage, celery, carrot, mint, cilantro, onion, lemon, peanut, dried shallots. Served with fish sauce)',
        items: [
          {
            id: 1,
            name: 'Tofu Salad',
            price: '$11.50'
          },
          {
            id: 2,
            name: 'Chicken Salad',
            price: '$11.75'
          },
          {
            id: 3,
            name: 'Shrimp Salad',
            price: '$12'
          }
        ]
      },
      {
        title: 'Asian Kale Salad',
        description: '(chopped kale & romaine lettuce, carrot, dried cranberry, toasted walnut & crunchy noodles. Served with sesame dressing)',
        items: [
          { id: 1, name: 'Avocado', price: '$9.95' },
          { id: 2, name: 'Teriyaki Chicken', price: '$11.75' },
          { id: 3, name: 'Tofu', price: '$11.50' },
          { id: 4, name: 'Tuna', price: '$11.25' }
        ]
      }
    ]
  },
  {
    id: 'drinks-dessert',
    displayName: 'Drinks & Dessert',
    sections: [
      {
        title: 'Fresh Juice',
        priceInfo: '(20oz)',
        items: [
          { 
            id: 1, 
            name: 'Mixed Vegetable', 
            price: '$7.25',
            description: '(apple, carrot, beet & ginger)'
          },
          { 
            id: 2, 
            name: 'Radiant Juice', 
            price: '$7.25',
            description: '(apple, orange, carrot & ginger)'
          },
          { 
            id: 3, 
            name: 'Cleansing Juice', 
            price: '$7.25',
            description: '(carrot, beet, cucumber & parsley)'
          },
          { 
            id: 4, 
            name: 'Double Spicy Juice with ice', 
            price: '$7.25',
            description: '(apple, lemon, beet, ginger & cayenne pepper)'
          },
          { 
            id: 5, 
            name: 'Mean Green Juice', 
            price: '$7.95',
            description: '(kale, cucumber, celery, apple, lemon & ginger)'
          },
          { 
            id: 6, 
            name: 'Green Power Juice', 
            price: '$7.95',
            description: '(spinach, kale, ginger, carrot & apple)'
          },
          { 
            id: 7, 
            name: 'Orange, Carrot & Ginger', 
            price: '$6.95'
          },
          { 
            id: 8, 
            name: 'The Mixed Green', 
            price: '$7.95',
            description: '(apple, pear, cucumber, kale & mint)'
          },
          { 
            id: 9, 
            name: 'Pineapple Sunrise with ice', 
            price: '$8.25',
            description: '(pineapple, apple, beet, orange & cayenne pepper)'
          },
          { 
            id: 10, 
            name: 'All Green Juice', 
            price: '$8.25',
            description: '(spinach, kale, parsley, cucumber & celery)'
          }
        ]
      },
      {
        title: 'Classic Smoothie',
        description: 'Blend with apple juice',
        priceInfo: '16oz - $5.95 / 20oz - $6.75',
        items: [
          { id: 1, name: 'Banana, Strawberry' },
          { id: 2, name: 'Peach, Pineapple' },
          { id: 3, name: 'Mango, Strawberry' },
          { id: 4, name: 'Mango, Pineapple' },
          { id: 5, name: 'Strawberry, Pineapple' },
          { id: 6, name: 'Mixed berries' }
        ]
      },
      {
        title: 'Green Smoothie',
        items: [
          { 
            id: 1, 
            name: 'Pineapple Coconut', 
            price: '$7.25',
            description: '(coconut water, coconut milk, kale, cashew, honey & pineapple. Garnish with coconut flakes)'
          },
          { 
            id: 2, 
            name: 'Tropical Green', 
            price: '$6.75',
            description: '(spinach, parsley, banana, mango, pineapple w/soy milk)'
          },
          { 
            id: 3, 
            name: 'Blueberry Avocado', 
            price: '$6.75',
            description: '(spinach, avocado, blueberry, whey protein powder w/ almond milk)'
          },
          { 
            id: 4, 
            name: 'Minty Peach Pineapple', 
            price: '$7.25',
            description: '(orange, vanilla yogurt, kale, mint, honey, peach & pineapple)'
          },
          { 
            id: 5, 
            name: 'Ginger Peach', 
            price: '$6.75',
            description: '(almond milk, spinach, honey, ginger & peach)'
          }
        ]
      },
      {
        title: 'Acai Bowl',
        priceInfo: '$12.99',
        description: '(22oz)',
        items: [
          {
            id: 1,
            name: 'Acai Bowl',
            description: 'Blend of organic acai, vanilla yogurt, banana, mango & pineapple with almond milk.\nTopping with granola, banana slices, berries, coconut flakes & honey'
          }
        ]
      }
    ]
  }
];
