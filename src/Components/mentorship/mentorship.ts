import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';

@Component({
    selector: 'app-mentorship',
    standalone: true,
    imports: [CommonModule, Header, Footer],
    templateUrl: './mentorship.html',
    styleUrl: './mentorship.css'
})
export class Mentorship {
    mentors = [
        { name: 'Sarah Jenkins', role: 'Staff Engineer @ Uber', tags: ['System Design', 'Golang'] },
        { name: 'Mike Chen', role: 'CTO @ StartUp', tags: ['Leadership', 'Startup'] },
        { name: 'Priya Sharma', role: 'Senior Dev @ Microsoft', tags: ['.NET', 'Azure'] }
    ];
}
