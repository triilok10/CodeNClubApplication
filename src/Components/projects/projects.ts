import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';
import { PROJECTS, Project } from './projects-data';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, RouterModule, Header, Footer],
    templateUrl: './projects.html',
    styleUrl: './projects.css'
})
export class Projects {
    activeFilter = 'All';
    projects = PROJECTS;
    filters = ['All', 'Full Stack', 'Frontend', 'Backend', 'DevOps'];

    get filteredProjects() {
        if (this.activeFilter === 'All') return this.projects;
        return this.projects.filter(p => p.category === this.activeFilter);
    }

    setFilter(filter: string) {
        this.activeFilter = filter;
    }
}
