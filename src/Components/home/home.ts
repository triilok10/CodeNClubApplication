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
    const numberOfParticles = (canvas.width * canvas.height) / 9000; // Density
    
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

      // Draw particle
      this.ctx.fillStyle = 'rgba(124, 58, 237, 0.5)'; // Violet color
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.fill();

      // Physics: Mouse attraction (Capture effect)
      let dx = this.mouse.x - p.x;
      let dy = this.mouse.y - p.y;
      let distance = Math.sqrt(dx*dx + dy*dy);
      
      if (distance < this.mouse.radius) {
        // Move particle towards mouse
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = this.mouse.radius;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * p.density;
        const directionY = forceDirectionY * force * p.density;
        
        p.x += directionX;
        p.y += directionY;
      } else {
        // Return to natural movement
        if (p.x !== p.baseX) {
           let dx = p.x - p.baseX;
           p.x -= dx/20; // Snap back slowly to original trajectory base
        }
        if (p.y !== p.baseY) {
           let dy = p.y - p.baseY;
           p.y -= dy/20;
        }
        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;
      }

      // Bounce off edges
       if (p.x < 0 || p.x > this.canvasRef.nativeElement.width) p.vx = -p.vx;
       if (p.y < 0 || p.y > this.canvasRef.nativeElement.height) p.vy = -p.vy;

       // Connect particles logic
       this.connectParticles(i);
    }
    
    this.animationId = requestAnimationFrame(this.animate.bind(this));
  }

  private connectParticles(index: number) {
    for (let j = index; j < this.particlesArray.length; j++) {
      let p1 = this.particlesArray[index];
      let p2 = this.particlesArray[j];
      let distance = Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
      
      if (distance < 150 * 150) { // Connection distance
        this.ctx.strokeStyle = `rgba(124, 58, 237, ${1 - (distance/25000)})`;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.stroke();
      }
    }
  }
}
