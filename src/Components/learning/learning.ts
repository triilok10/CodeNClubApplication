
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { COURSES, Course, Topic } from '../courses/course-data';

@Component({
    selector: 'app-learning',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './learning.html',
    styleUrl: './learning.css'
})
export class Learning implements OnInit {
    course: Course | undefined;
    topics: Topic[] = [];
    selectedTopic: Topic | undefined;

    showShareModal = false;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.course = COURSES.find(c => c.id === id);
                if (this.course && this.course.topics && this.course.topics.length > 0) {
                    this.topics = this.course.topics;
                    this.selectedTopic = this.topics[0];
                }
            }
        });
    }

    selectTopic(topic: Topic) {
        this.selectedTopic = topic;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    toggleShareModal() {
        this.showShareModal = !this.showShareModal;
    }

    copyLink() {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
}
