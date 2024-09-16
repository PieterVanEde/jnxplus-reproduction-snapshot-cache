import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'testmonorepo-angular-library-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-library-a.component.html',
  styleUrl: './angular-library-a.component.css',
})
export class AngularLibraryAComponent {}
