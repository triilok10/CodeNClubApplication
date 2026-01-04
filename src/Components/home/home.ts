import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  @ViewChild('networkCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private particlesArray: Particle[] = [];
  private animationId: number = 0;
  private mouse = {
    x: -1000, // Start off-screen
    y: -1000,
    radius: 150 // Interaction radius
  };

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initCanvas();
      this.animate();
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser && this.canvasRef) {
      this.initCanvas();
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isBrowser) {
      // Adjust for canvas position if it's not fixed full screen, 
      // but here we assume full interactive background.
      const rect = this.canvasRef.nativeElement.getBoundingClientRect();
      this.mouse.x = event.clientX - rect.left;
      this.mouse.y = event.clientY - rect.top;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.mouse.x = -1000;
    this.mouse.y = -1000;
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; // Or specific container height

    this.particlesArray = [];
    const numberOfParticles = (canvas.width * canvas.height) / 5000; // Higher density of dots

    for (let i = 0; i < numberOfParticles; i++) {
      const size = (Math.random() * 3) + 1;
      const x = Math.random() * (canvas.width - size * 2) - size * 2;
      const y = Math.random() * (canvas.height - size * 2) - size * 2;
      const directionX = (Math.random() * 2) - 1; // Speed
      const directionY = (Math.random() * 2) - 1;

      this.particlesArray.push({
        x: x,
        y: y,
        vx: directionX,
        vy: directionY,
        size: size,
        baseX: x,
        baseY: y,
        density: (Math.random() * 30) + 1
      });
    }
  }

  private animate() {
    if (!this.isBrowser) return;

    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

    for (let i = 0; i < this.particlesArray.length; i++) {
      let p = this.particlesArray[i];

      // Draw particle - Softer, translucent violet
      this.ctx.fillStyle = 'rgba(139, 92, 246, 0.4)';
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.fill();

      // Physics: Mouse attraction (Antigravity/Magnetic effect)
      let dx = this.mouse.x - p.x;
      let dy = this.mouse.y - p.y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      // Gentle attraction range
      if (distance < 200) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 200;
        const force = (maxDistance - distance) / maxDistance;

        // Pushing force inverted to create "gathering" or "orbit" feel
        // User asked for "Gathering of the dots", so positive attraction
        const directionX = forceDirectionX * force * p.density * 0.8;
        const directionY = forceDirectionY * force * p.density * 0.8;

        p.x += directionX;
        p.y += directionY;
      } else {
        // Return to natural movement / floating
        if (p.x !== p.baseX) {
          let dx = p.x - p.baseX;
          p.x -= dx / 40; // Slower return for smoother feel
        }
        if (p.y !== p.baseY) {
          let dy = p.y - p.baseY;
          p.y -= dy / 40;
        }
      }

      // Apply base floating velocity
      p.x += p.vx * 0.5; // Slow down natural movement
      p.y += p.vy * 0.5;

      // Bounce off edges (keep within canvas mostly)
      if (p.x < 0 || p.x > this.canvasRef.nativeElement.width) p.vx = -p.vx;
      if (p.y < 0 || p.y > this.canvasRef.nativeElement.height) p.vy = -p.vy;
    }

    this.animationId = requestAnimationFrame(this.animate.bind(this));
  }

  // Removed connectParticles to show "only the dots" as requested
}
