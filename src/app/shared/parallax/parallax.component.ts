import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parallax',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parallax.component.html',
  styles: [`
    .parallax-container {
      perspective: 1px;
      transform-style: preserve-3d;
    }
    .parallax-bg {
      transform: translateZ(-1px);
      transform-origin: center center;
      min-height: 130vh;
    }
  `]
})
export class ParallaxComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.updateParallax();
  }

  @HostListener('window:scroll')
  updateParallax() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const scrollPosition = window.pageYOffset;
    const offset = rect.top + scrollPosition;
    const speed = 0.5;

    const initialOffset = -150;
    
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const yPos = -(scrollPosition - offset) * speed + initialOffset;
      this.el.nativeElement.querySelector('.parallax-bg').style.transform = 
        `translate3d(0, ${yPos}px, 0)`;
    }
  }
}
