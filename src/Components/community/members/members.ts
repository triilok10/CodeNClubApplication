import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Header } from '../../Common/header/header';
import { Footer } from '../../Common/footer/footer';

@Component({
    selector: 'app-community-members',
    standalone: true,
    imports: [CommonModule, RouterModule, Header, Footer],
    templateUrl: './members.html',
    styleUrl: './members.css'
})
export class CommunityMembers implements OnInit {
    members = [
        { id: 1, name: 'Alex Thompson', avatar: 'https://i.pravatar.cc/150?u=1', role: 'Full Stack Dev', bio: 'Passionate about building scalable web apps and mentoring juniors.', contribution: 'Active contributor to Open Source Labs.' },
        { id: 2, name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?u=2', role: 'UI/UX Designer', bio: 'Creating beautiful and intuitive user experiences.', contribution: 'Helped design the new Community UI.' },
        { id: 3, name: 'Raj Malhotra', avatar: 'https://i.pravatar.cc/150?u=3', role: 'Cloud Architect', bio: 'Expert in Azure and AWS cloud infrastructure.', contribution: 'Mentor for the Azure Bootcamp.' },
        { id: 4, name: 'Emily Davis', avatar: 'https://i.pravatar.cc/150?u=4', role: 'Data Scientist', bio: 'Exploring the intersection of AI and healthcare.', contribution: 'Lead developer for the AI Health project.' },
        { id: 5, name: 'Michael Brown', avatar: 'https://i.pravatar.cc/150?u=5', role: 'DevOps Engineer', bio: 'Automating everything from builds to deployments.', contribution: 'Implemented the CI/CD pipeline for the lab.' },
        { id: 6, name: 'Jessica Lee', avatar: 'https://i.pravatar.cc/150?u=6', role: 'Frontend Dev', bio: 'Specializing in React and Angular frameworks.', contribution: 'Speaker at the last React Meetup.' },
        { id: 7, name: 'David Wilson', avatar: 'https://i.pravatar.cc/150?u=7', role: 'Security Analyst', bio: 'Protecting user data and ensuring system integrity.', contribution: 'Led the security audit for the community platform.' },
        { id: 8, name: 'Sophie Martin', avatar: 'https://i.pravatar.cc/150?u=8', role: 'Product Manager', bio: 'Bridging the gap between technology and user needs.', contribution: 'Organized the quarterly roadmap sessions.' }
    ];

    selectedMember: any = null;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const memberId = params['id'];
            if (memberId) {
                this.selectedMember = this.members.find(m => m.id === parseInt(memberId));
            }
        });
    }

    selectMember(member: any) {
        this.selectedMember = member;
    }

    closeProfile() {
        this.selectedMember = null;
    }
}
