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
  @Input() heroText: any | undefined;
  @Input() heroMovie: any;
  background: string | undefined = '';

  constructor() {}

  ngOnInit() {
    this.background = `background-image:linear-gradient(to top, #121212 40%, transparent) , url(${this.heroMovie.background})`;
  }
}
