import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
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

    membersPreview = [
        { id: 1, name: 'Alex Thompson', avatar: 'https://i.pravatar.cc/150?u=1', role: 'Full Stack Dev', bio: 'Passionate about building scalable web apps and mentoring juniors.', contribution: 'Active contributor to Open Source Labs.' },
        { id: 2, name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?u=2', role: 'UI/UX Designer', bio: 'Creating beautiful and intuitive user experiences.', contribution: 'Helped design the new Community UI.' },
        { id: 3, name: 'Raj Malhotra', avatar: 'https://i.pravatar.cc/150?u=3', role: 'Cloud Architect', bio: 'Expert in Azure and AWS cloud infrastructure.', contribution: 'Mentor for the Azure Bootcamp.' },
        { id: 4, name: 'Emily Davis', avatar: 'https://i.pravatar.cc/150?u=4', role: 'Data Scientist', bio: 'Exploring the intersection of AI and healthcare.', contribution: 'Lead developer for the AI Health project.' },
        { id: 5, name: 'Michael Brown', avatar: 'https://i.pravatar.cc/150?u=5', role: 'DevOps Engineer', bio: 'Automating everything from builds to deployments.', contribution: 'Implemented the CI/CD pipeline for the lab.' },
        { id: 6, name: 'Jessica Lee', avatar: 'https://i.pravatar.cc/150?u=6', role: 'Frontend Dev', bio: 'Specializing in React and Angular frameworks.', contribution: 'Speaker at the last React Meetup.' }
    ];

    constructor(private router: Router) { }

    selectMember(member: any) {
        this.router.navigate(['/community/members'], { queryParams: { id: member.id } });
    }
}
