import { Component, Input } from '@angular/core';
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
  @Input() heroMovie: any = []
  heroStyles: string = "";

  ngOnInit() {
     this.heroStyles = `background-image:linear-gradient(to top, #121212 40%, transparent) , url(${this.heroMovie.background})`
  }
}
