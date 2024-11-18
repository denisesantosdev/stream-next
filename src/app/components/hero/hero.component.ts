import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule, TooltipModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() heroMovie: any = [];
  heroStyles: string = '';

  constructor() {}

  ngOnInit() {
    this.heroStyles = `background-image:linear-gradient(to top, #121212 40%, transparent) , url(${this.heroMovie.background})`;
    
  }
}
