import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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
        {
            rating: 5,
            text: "Best banh mi in Oakland! The bread is always fresh and crispy, and the fillings are generous and flavorful.",
            author: "John D.",
            source: "yelp",
            date: "2024-02-15"
        },
        {
            rating: 5,
            text: "Amazing Vietnamese coffee and friendly service. Their smoothies are also fantastic!",
            author: "Sarah M.",
            source: "google",
            date: "2024-03-01"
        },
        {
            rating: 5,
            text: "Fresh ingredients, great prices, and quick service. The tofu mushroom sandwich is my favorite!",
            author: "Mike R.",
            source: "yelp",
            date: "2024-02-28"
        },
        {
            rating: 5,
            text: "Love their summer rolls and vermicelli bowls. Everything is always fresh and delicious.",
            author: "Lisa K.",
            source: "google",
            date: "2024-03-10"
        },
        {
          rating: 5,
          text: "Best banh mi in Oakland! The bread is always fresh and crispy, and the fillings are generous and flavorful.",
          author: "John D.",
          source: "yelp",
          date: "2024-02-15"
      },
      {
          rating: 5,
          text: "Amazing Vietnamese coffee and friendly service. Their smoothies are also fantastic!",
          author: "Sarah M.",
          source: "google",
          date: "2024-03-01"
      },
      {
          rating: 5,
          text: "Fresh ingredients, great prices, and quick service. The tofu mushroom sandwich is my favorite!",
          author: "Mike R.",
          source: "yelp",
          date: "2024-02-28"
      },
      {
          rating: 5,
          text: "Love their summer rolls and vermicelli bowls. Everything is always fresh and delicious.",
          author: "Lisa K.",
          source: "google",
          date: "2024-03-10"
      },
      {
        rating: 5,
        text: "Best banh mi in Oakland! The bread is always fresh and crispy, and the fillings are generous and flavorful.",
        author: "John D.",
        source: "yelp",
        date: "2024-02-15"
    },
    {
        rating: 5,
        text: "Amazing Vietnamese coffee and friendly service. Their smoothies are also fantastic!",
        author: "Sarah M.",
        source: "google",
        date: "2024-03-01"
    },
    {
        rating: 5,
        text: "Fresh ingredients, great prices, and quick service. The tofu mushroom sandwich is my favorite!",
        author: "Mike R.",
        source: "yelp",
        date: "2024-02-28"
    },
    {
        rating: 5,
        text: "Love their summer rolls and vermicelli bowls. Everything is always fresh and delicious.",
        author: "Lisa K.",
        source: "google",
        date: "2024-03-10"
    }
    ];

    constructor() {
        // Initialize the filtered reviews
        this.yelpReviews = this.reviews.filter(r => r.source === 'yelp');
        this.googleReviews = this.reviews.filter(r => r.source === 'google');

        // Duplicate reviews for continuous scrolling
        this.yelpReviews = [...this.yelpReviews, ...this.yelpReviews, ...this.yelpReviews];
        this.googleReviews = [...this.googleReviews, ...this.googleReviews, ...this.googleReviews];
    }
}
