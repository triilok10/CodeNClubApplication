import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';

@Component({
    selector: 'app-community',
    standalone: true,
    imports: [CommonModule, Header, Footer],
    templateUrl: './community.html',
    styleUrl: './community.css'
})
export class Community {
    events = [
        { title: 'Weekly Code Review', time: 'Every Friday, 6 PM', icon: 'bi-code-slash' },
        { title: 'System Design AMAs', time: 'Bi-weekly Saturdays', icon: 'bi-diagram-3' },
        { title: 'Hackathon Prep', time: 'Monthly', icon: 'bi-trophy' }
    ];
}
