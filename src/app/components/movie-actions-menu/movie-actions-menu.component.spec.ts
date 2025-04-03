import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieActionsMenuComponent } from './movie-actions-menu.component';

describe('MovieActionsMenuComponent', () => {
  let component: MovieActionsMenuComponent;
  let fixture: ComponentFixture<MovieActionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieActionsMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieActionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
