import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';

@Component({
    selector: 'app-community',
    standalone: true,
    imports: [CommonModule, RouterModule, Header, Footer],
    templateUrl: './community.html',
    styleUrl: './community.css'
})
export class Community {
    discussions = [
        {
            text: "Hi Everyone, hope you all are doing great. Here is a thought for the day!",
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
            style: { top: '5%', left: '2%' }
        },
        {
            text: "Web3 is trending because it's changing the internet as we know it...",
            name: "Sarah Williams",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
            style: { top: '20%', right: '2%' }
        },
        {
            text: "On-campus Interview Experience for SDE at Microsoft",
            name: "Raj Patel",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
            style: { bottom: '5%', right: '5%' }
        }
    ];

    events = [
        { id: 'azure-bootcamp', date: '12', month: 'OCT', title: 'Global Azure Bootcamp', type: 'Webinar', status: 'Open', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8' }
    ];

    communityFeatures = [
        { icon: 'bi-mortarboard', title: 'Curated Learning', desc: 'Accelerate your career with structured roadmaps and expert-led sessions.' },
        { icon: 'bi-code-square', title: 'Open Source Labs', desc: 'Collaborate on world-class projects and build your professional portfolio.' },
        { icon: 'bi-briefcase', title: 'Strategic Mentorship', desc: 'Get direct guidance from industry veterans at Google, Microsoft, and Amazon.' }
    ];
}
