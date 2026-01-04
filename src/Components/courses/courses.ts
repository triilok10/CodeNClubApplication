import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For ngFor, etc.
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';

interface Course {
    id: string;
    title: string;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    stack: string;
    image: string;
    duration: string;
}

@Component({
    selector: 'app-courses',
    standalone: true,
    imports: [CommonModule, Header, Footer],
    templateUrl: './courses.html',
    styleUrl: './courses.css'
})
export class Courses {
    courses: Course[] = [
        {
            id: 'net-core-internals',
            title: 'Deep Dive into .NET 9 Internals',
            description: 'Understand the CLR, Memory Management, and Garbage Collection extensively.',
            level: 'Advanced',
            stack: '.NET Core',
            image: 'https://images.unsplash.com/photo-1629904853716-f004c3756858?auto=format&fit=crop&w=600&q=80',
            duration: '12 Weeks'
        },
        {
            id: 'azure-microservices',
            title: 'Azure Microservices Architecture',
            description: 'Building scalable, distributed systems using Azure Container Apps and Dapr.',
            level: 'Intermediate',
            stack: 'Azure',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&w=600&q=80',
            duration: '10 Weeks'
        },
        {
            id: 'k8s-mastery',
            title: 'Kubernetes for Developers',
            description: 'From Dockerfile to Helm Charts. Practical K8s for application engineers.',
            level: 'Intermediate',
            stack: 'DevOps',
            image: 'https://images.unsplash.com/photo-1667372393119-c81c0cda0563?auto=format&fit=crop&w=600&q=80',
            duration: '8 Weeks'
        },
        {
            id: 'angular-enterprise',
            title: 'Enterprise Angular Patterns',
            description: 'Nx Monorepos, RxJS State Management, and Module Federation.',
            level: 'Advanced',
            stack: 'Frontend',
            image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=600&q=80',
            duration: '10 Weeks'
        },
        {
            id: 'system-design',
            title: 'System Design for Tech Leads',
            description: 'Designing high-scale systems. CAP theorem, caching strategies, and sharding.',
            level: 'Advanced',
            stack: 'Architecture',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
            duration: '6 Weeks'
        },
        {
            id: 'csharp-foundations',
            title: 'C# 12 Foundations',
            description: 'Solidify your base with the latest features of C# 12 and .NET 9.',
            level: 'Beginner',
            stack: '.NET Core',
            image: 'https://images.unsplash.com/photo-1607799279819-d28615e90e3c?auto=format&fit=crop&w=600&q=80',
            duration: '4 Weeks'
        }
    ];

    filters = ['All', '.NET Core', 'Azure', 'Frontend', 'DevOps', 'Architecture'];
    activeFilter = 'All';

    get filteredCourses() {
        if (this.activeFilter === 'All') return this.courses;
        return this.courses.filter(c => c.stack === this.activeFilter);
    }

    setFilter(filter: string) {
        this.activeFilter = filter;
    }
}
