import { Component } from '@angular/core';

@Component({
    selector: 'app-careers',
    standalone: true,
    template: `
    <div class="container py-5 mt-5 text-center">
      <h1 class="display-4 fw-bold mb-4">Join the <span class="text-violet">Team</span></h1>
      <p class="lead text-muted">We are looking for writers and mentors. Applications opening soon.</p>
    </div>
  `
})
export class Careers { }
