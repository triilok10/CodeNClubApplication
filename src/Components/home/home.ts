import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
}

@Component({
  selector: 'app-home',
  imports: [Header, Footer, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  founderImages: string[] = [
    'assets/Trilok1.png',
    'assets/Trilok2.png'
  ];
  currentImageIndex: number = 0;
  private carouselInterval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startCarousel();
    }
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  stopCarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.founderImages.length;
  }

  setCurrentImage(index: number) {
    this.currentImageIndex = index;
    // Reset interval when manually changed
    this.stopCarousel();
    this.startCarousel();
  }
}
