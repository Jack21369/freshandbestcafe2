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
      text: "\"Best combo sandwich I've had in Oakland! The bread was fresh and crunchy, and the ingredients were generous...\"",
      author: "Tania D.",
      source: "yelp",
      date: "2024-06-13"
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
