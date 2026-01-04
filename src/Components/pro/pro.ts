import { Component } from '@angular/core';

@Component({
    selector: 'app-pro',
    standalone: true,
    template: `
    <div class="container py-5 mt-5 text-center">
      <h1 class="display-4 fw-bold mb-4">Go <span class="text-violet">Pro</span></h1>
      <p class="lead text-muted">Unlock extensive content and mentorship access. Coming soon.</p>
    </div>
  `
})
export class Pro { }
