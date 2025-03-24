import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Review {
  rating: number;
  text: string;
  author: string;
  source: 'yelp' | 'google';
  date: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  yelpReviews: Review[] = [];
  googleReviews: Review[] = [];
  
  private readonly reviews: Review[] = [
    // Yelp Reviews
    {
      rating: 5,
      text: "\"Their green smoothies are the best, especially the Spinach pear and spinach berry peanut butter...\"",
      author: "Jannet L.",
      source: "yelp",
      date: "2024-07-26"
    },
    {
      rating: 5,
      text: "\"...Massive sandwich with fresh, crunchy bread, abundant veg, perfect meat, and lovely, affordable service...\"",
      author: "Mike I.",
      source: "yelp",
      date: "2024-07-22"
    },
    {
      rating: 5,
      text: "\"...Generous portion of meat, warm crunchy yet soft bread, and fast, efficient service at a cute mom and pop cafe...\"",
      author: "Margaret W.",
      source: "yelp",
      date: "2024-07-20"
    },
    {
      rating: 5,
      text: "\"Food was great large portions for the price. I had the bagel club sandwich and Thai iced tea.\"",
      author: "Alex R.",
      source: "yelp",
      date: "2024-07-09"
    },
    {
      rating: 5,
      text: "\"I love this cafe! Their juice, vegetarian banh mi, and smoothies are very good with affordable prices...\"",
      author: "Catherine M.",
      source: "yelp",
      date: "2024-07-01"
    },
    {
      rating: 5,
      text: "\"Best combo sandwich I've had in Oakland! The bread was fresh and crunchy, and the ingredients were generous...\"",
      author: "Tania D.",
      source: "yelp",
      date: "2024-06-13"
    },
    {
      rating: 5,
      text: "\"Place is cozy with great vibes and welcoming service...\"",
      author: "Hani A.",
      source: "yelp",
      date: "2024-06-12"
    },
    {
      rating: 5,
      text: "\"...I loved the Asian kale salad with tofu—delicious dressing, toasted chow mein noodles, and a savory, nutty flavor. The green smoothies were fantastic too...\"",
      author: "Sydney J.",
      source: "yelp",
      date: "2024-06-12"
    },
    {
      rating: 5,
      text: "\"...Vietnamese chicken salad with well-seasoned, perfectly charred grilled chicken, crisp fresh vegetables, and a light, flavorful nước chấm. Absolutely delicious!...\"",
      author: "Rick M.",
      source: "yelp",
      date: "2024-06-04"
    },
    {
      rating: 5,
      text: "\"The food here really lives up to the name—fresh, crunchy vegetables, delicious sandwiches, and spring rolls with amazing service that gives a home comfort feeling...\"",
      author: "Phoebe F.",
      source: "yelp",
      date: "2024-06-03"
    },

    // Google Reviews
    {
      rating: 5,
      text: "\"This is my favorite place for lunch. Their banh mi and breakfast croissant are big, yummy, and always fresh!...\"",
      author: "Sergio P",
      source: "google",
      date: "2024-06-26"
    },
    {
      rating: 5,
      text: "\"One of my favorite lunch spots in downtown Oakland with super fresh food, generous portions, and great value...\"",
      author: "Kryspin Turczynski",
      source: "google",
      date: "2024-07-20"
    },
    {
      rating: 5,
      text: "\"Our go-to lunch spot: fresh, made-to-order shrimp rolls and a double spicy juice that is a great detox...\"",
      author: "Kuali Salsa",
      source: "google",
      date: "2023-07-26"
    },
    {
      rating: 5,
      text: "\"Food, smoothies, and prices are good, and the friendly staff make dining inside a pleasant experience...\"",
      author: "Alexandra Flores",
      source: "google",
      date: "2024-06-26"
    },
    {
      rating: 5,
      text: "\"This place is truly the best! The Vietnamese vegetarian lemongrass sandwich is amazing, huge, and a great value...\"",
      author: "Sasha Dusky",
      source: "google",
      date: "2023-12-26"
    },
    {
      rating: 5,
      text: "\"The tofu and mushroom banh mi are flavorful, jam-packed, and made with high-quality bread. Also, the breakfast sandwiches and smoothies are fantastic...\"",
      author: "Eric Svenson",
      source: "google",
      date: "2024-06-26"
    },
    {
      rating: 5,
      text: "\"The rice bowl with grilled chicken is truly everything: flavorful, generous portions, and highly recommended...\"",
      author: "Cerena Johnson",
      source: "google",
      date: "2024-03-26"
    },
    {
      rating: 5,
      text: "\"They served a PACKED banh mi with the best cold cuts and crisp veggies—a real steal at $11!...\"",
      author: "Nicole Setow",
      source: "google",
      date: "2024-06-26"
    },
    {
      rating: 5,
      text: "\"The tofu mushroom sandwich is a 15/10 with a down-to-earth, neighborhood vibe...\"",
      author: "Jacob Regier",
      source: "google",
      date: "2024-04-26"
    },
    {
      rating: 5,
      text: "\"Best smoothies in town! Great food and prices, making it a favorite breakfast and lunch spot...\"",
      author: "Beatriz Luzardo",
      source: "google",
      date: "2023-07-26"
    }
  ];

  constructor() {
    // Initialize the filtered reviews (excluding any with "Anonymous" as the author)
    this.yelpReviews = this.reviews.filter(r => r.source === 'yelp' && r.author.toLowerCase() !== 'anonymous');
    this.googleReviews = this.reviews.filter(r => r.source === 'google' && r.author.toLowerCase() !== 'anonymous');

    // Duplicate reviews for continuous scrolling
    this.yelpReviews = [...this.yelpReviews, ...this.yelpReviews, ...this.yelpReviews];
    this.googleReviews = [...this.googleReviews, ...this.googleReviews, ...this.googleReviews];
  }
}
