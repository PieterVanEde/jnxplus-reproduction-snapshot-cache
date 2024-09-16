import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'testmonorepo-angular-library-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-library-b.component.html',
  styleUrl: './angular-library-b.component.css',
})
export class AngularLibraryBComponent {}
