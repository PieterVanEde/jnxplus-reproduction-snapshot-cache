import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularLibraryBComponent } from './angular-library-b.component';

describe('AngularLibraryBComponent', () => {
  let component: AngularLibraryBComponent;
  let fixture: ComponentFixture<AngularLibraryBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLibraryBComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularLibraryBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
