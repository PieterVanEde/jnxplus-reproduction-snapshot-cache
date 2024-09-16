import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularLibraryAComponent } from './angular-library-a.component';

describe('AngularLibraryAComponent', () => {
  let component: AngularLibraryAComponent;
  let fixture: ComponentFixture<AngularLibraryAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLibraryAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularLibraryAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
