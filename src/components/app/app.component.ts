import { Component } from '@angular/core';

/* Components */
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PizzenService } from '../../services/pizzen.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
  ],
  

})
export class AppComponent {
  constructor(private router: Router) {}
}
