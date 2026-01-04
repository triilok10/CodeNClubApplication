import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [CommonModule, Header, Footer],
    templateUrl: './blog.html',
    styleUrl: './blog.css'
})
export class Blog {
    featured = {
        title: 'The Future of .NET in Cloud Native Era',
        desc: 'Why .NET 9 is becoming the go-to backend for high-performance microservices.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80'
    };
}
