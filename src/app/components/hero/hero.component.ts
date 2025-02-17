import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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

  constructor(
    private router: Router,
    private scroller: ViewportScroller,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.background = `background-image: var(--hero-gradient), url(${this.heroMovie.background})`;

    //this.background = `background-image: url(${this.heroMovie.background})`;

    this.trailerEl = document.getElementById('trailer');

    if (this.route.snapshot.fragment === 'trailer') {
      this.scroller.scrollToAnchor('trailer');
    }
  }

  goDown() {
    if (this.trailerEl) {
      this.scroller.scrollToAnchor('trailer');
    } else {
      this.router.navigate([this.heroMovie.id], { fragment: 'trailer' });
    }
  }
}
