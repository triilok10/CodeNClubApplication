import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from '../../Common/header/header';
import { Footer } from '../../Common/footer/footer';
import { EVENTS, Event } from '../events-data';

@Component({
    selector: 'app-event-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, Header, Footer],
    templateUrl: './event-detail.html',
    styleUrl: './event-detail.css'
})
export class EventDetail implements OnInit {
    event: Event | undefined;
    showModal = false;
    currentStep = 1;
    isRegistered = false;

    // Professional Registration Form
    registration = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        designation: 'Student', // Student or Professional

        // Student specific
        college: '',
        class: '',

        // Professional specific
        company: '',
        experience: ''
    };

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.event = EVENTS.find(e => e.id === id);
            }
        });
    }

    openRegisterModal() {
        this.showModal = true;
        this.currentStep = 1;
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.showModal = false;
        document.body.style.overflow = '';
    }

    nextStep() {
        this.currentStep = 2;
    }

    prevStep() {
        this.currentStep = 1;
    }

    submitRegistration() {
        // Mock Submission
        console.log('Final Registration Data:', this.registration);
        this.isRegistered = true;

        // Auto-close modal after some time if desired, or let user stay on success page
    }
}
