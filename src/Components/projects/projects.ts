import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';

interface Project {
    title: string;
    desc: string;
    tags: string[];
    image: string;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, Header, Footer],
    templateUrl: './projects.html',
    styleUrl: './projects.css' // Reusing common styles effectively via global or local
})
export class Projects {
    projects: Project[] = [
        {
            title: 'E-Commerce Microservices',
            desc: 'A full reference architecture for .NET 8 e-commerce systems with RabbitMQ.',
            tags: ['.NET', 'RabbitMQ', 'Docker'],
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=600&q=80'
        },
        {
            title: 'Task Management SaaS',
            desc: 'Multi-tenant task manager using Angular 17 and Supabase.',
            tags: ['Angular', 'Supabase', 'SaaS'],
            image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=600&q=80'
        },
        {
            title: 'DevHub CLI',
            desc: 'Open source CLI tool for scaffolding enterprise boilerplate code.',
            tags: ['C#', 'CLI', 'Open Source'],
            image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80'
        }
    ];
}
