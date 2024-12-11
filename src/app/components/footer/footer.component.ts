import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SocialLinksComponent } from "../social-links/social-links.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonModule, SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
