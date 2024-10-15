import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule, TooltipModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  heroImageUrl: string = 'https://dummyimage.com/500x300.jpg';

  heroStyles: string = `background-image:linear-gradient(to top, #121212, #1212129f) , url(${this.heroImageUrl})`;
}
