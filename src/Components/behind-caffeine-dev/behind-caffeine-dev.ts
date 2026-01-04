import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';

@Component({
    selector: 'app-behind-caffeine-dev',
    standalone: true,
    imports: [CommonModule, FormsModule, Header, Footer],
    templateUrl: './behind-caffeine-dev.html',
    styleUrl: './behind-caffeine-dev.css'
})
export class BehindCaffeineDev implements OnInit, OnDestroy {
    isModalOpen = false;
    isSubmitting = false;
    isSubmitted = false;

    formData = {
        name: '',
        email: '',
        profession: '',
        reason: '',
        linkedin: '',
        github: '',
        resume: null as File | null
    };

    private observer: IntersectionObserver | null = null;

    ngOnInit() {
        this.initScrollAnimations();
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    private initScrollAnimations() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                }
            });
        }, options);

        // Observe elements after a short delay to ensure DOM is ready
        setTimeout(() => {
            const elements = document.querySelectorAll('.scroll-animate');
            elements.forEach(el => this.observer?.observe(el));
        }, 100);
    }

    openModal() {
        this.isModalOpen = true;
        this.isSubmitted = false;
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.isModalOpen = false;
        document.body.style.overflow = '';
    }

    onFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.formData.resume = input.files[0];
        }
    }

    async submitForm() {
        if (!this.formData.name || !this.formData.email || !this.formData.reason) {
            return;
        }

        this.isSubmitting = true;

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Here you would typically send the data to your backend
        console.log('Form submitted:', this.formData);

        this.isSubmitting = false;
        this.isSubmitted = true;

        // Reset form after 3 seconds
        setTimeout(() => {
            this.closeModal();
            this.resetForm();
        }, 3000);
    }

    private resetForm() {
        this.formData = {
            name: '',
            email: '',
            profession: '',
            reason: '',
            linkedin: '',
            github: '',
            resume: null
        };
        this.isSubmitted = false;
    }

    @HostListener('document:keydown.escape')
    onEscapePress() {
        if (this.isModalOpen) {
            this.closeModal();
        }
    }
}
