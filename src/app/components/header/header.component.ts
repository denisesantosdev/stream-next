import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SocialLinksComponent } from "../social-links/social-links.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    InputSwitchModule,
    SocialLinksComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
