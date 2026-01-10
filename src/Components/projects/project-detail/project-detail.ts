
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PROJECTS, Project } from '../projects-data';
import { Header } from '../../Common/header/header';
import { Footer } from '../../Common/footer/footer';

@Component({
    selector: 'app-project-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, Header, Footer],
    templateUrl: './project-detail.html',
    styleUrl: './project-detail.css'
})
export class ProjectDetail implements OnInit {
    project: Project | undefined;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.project = PROJECTS.find(p => p.id === id);
            }
        });
    }

    shareProject() {
        if (navigator.share) {
            navigator.share({
                title: this.project?.title,
                text: this.project?.description,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Project link copied to clipboard!');
        }
    }
}
