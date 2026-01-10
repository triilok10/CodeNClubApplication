import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';
import { COURSES, Course } from './course-data';

@Component({
    selector: 'app-courses',
    standalone: true,
    imports: [Header, Footer, CommonModule, RouterModule],
    templateUrl: './courses.html',
    styleUrl: './courses.css'
})
export class Courses {
    selectedCourse: Course | null = null;
    activeFilter = 'All';

    courses: Course[] = COURSES;

    filters = ['All', '.NET Core', 'Azure', 'Frontend', 'DevOps', 'Architecture', 'Database'];

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                const found = this.courses.find(c => c.id === id);
                if (found) {
                    this.selectedCourse = found;
                } else {
                    // ID not found, maybe redirect to courses list or show list
                    this.selectedCourse = null;
                }
            } else {
                this.selectedCourse = null;
            }
        });
    }

    get filteredCourses() {
        if (this.activeFilter === 'All') return this.courses;
        return this.courses.filter(c => c.stack === this.activeFilter);
    }

    setFilter(filter: string) {
        this.activeFilter = filter;
    }

    viewCourse(id: string) {
        this.router.navigate(['/courses', id]);
    }

    goBack() {
        this.router.navigate(['/courses']);
    }
}
