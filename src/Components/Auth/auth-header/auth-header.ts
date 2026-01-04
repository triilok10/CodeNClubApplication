import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-auth-header',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './auth-header.html',
    styleUrl: './auth-header.css',
})
export class AuthHeader { }
