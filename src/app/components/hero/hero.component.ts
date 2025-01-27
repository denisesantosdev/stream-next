import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { Router, RouterLink } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ViewportScroller } from '@angular/common';

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
  trailerEl: any;

  constructor(private router: Router, private scroller: ViewportScroller) {}

  ngOnInit() {
    this.background = `background-image: linear-gradient(to top, #121212 30%, #12121290, transparent, #121212) , url(${this.heroMovie.background})`;

    this.trailerEl = document.getElementById('trailer');
  }

  goDown() {
    if (this.trailerEl) {
      this.trailerEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}
