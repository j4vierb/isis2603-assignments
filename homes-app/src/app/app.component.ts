import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

/**
 * The root component for the application.
 * The template contains a header with the brand logo and a router-outlet for the main content.
 */
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <a routerLink="/">
          <img class="brand-logo" src="/assets/logo.svg" alt="Homes Logo" aria-hidden="true"/>
        </a>
      </header>
      <section>
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
