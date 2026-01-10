import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthHeader } from '../auth-header/auth-header';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, RouterModule, AuthHeader],
    templateUrl: './login.html',
    styleUrl: './login.css',
})
export class Login {
    loginData = {
        email: '',
        password: '',
        rememberMe: false
    };

    isSubmitting = false;

    onSubmit() {
        this.isSubmitting = true;
        console.log('Login attempt:', this.loginData);
        // Simulate API call
        setTimeout(() => {
            this.isSubmitting = false;
            alert('Login logic will be implemented here!');
        }, 1500);
    }
}
