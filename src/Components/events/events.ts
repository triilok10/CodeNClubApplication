import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';

@Component({
    selector: 'app-events',
    standalone: true,
    imports: [CommonModule, Header, Footer],
    templateUrl: './events.html',
    styleUrl: './events.css'
})
export class Events {
    events = [
        { date: '12', month: 'OCT', title: 'Global Azure Bootcamp', type: 'Webinar' },
        { date: '25', month: 'OCT', title: 'Hacktoberfest Finale', type: 'Hackathon' },
        { date: '05', month: 'NOV', title: 'System Design Interview Prep', type: 'Workshop' }
    ];
}
