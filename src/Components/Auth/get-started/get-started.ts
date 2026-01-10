import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthHeader } from '../auth-header/auth-header';

@Component({
    selector: 'app-get-started',
    standalone: true,
    imports: [FormsModule, RouterModule, AuthHeader],
    templateUrl: './get-started.html',
    styleUrl: './get-started.css',
})
export class GetStarted {
    signupData = {
        fullName: '',
        email: '',
        password: '',
        agreeTerms: false
    };

    isSubmitting = false;

    onSubmit() {
        this.isSubmitting = true;
        console.log('Signup attempt:', this.signupData);
        // Simulate API call
        setTimeout(() => {
            this.isSubmitting = false;
            alert('Signup logic will be implemented here!');
        }, 1500);
    }
}
