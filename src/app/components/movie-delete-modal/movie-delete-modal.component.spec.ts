import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDeleteModalComponent } from './movie-delete-modal.component';

describe('MovieDeleteModalComponent', () => {
  let component: MovieDeleteModalComponent;
  let fixture: ComponentFixture<MovieDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDeleteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
