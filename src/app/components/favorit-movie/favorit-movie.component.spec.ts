import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritMovieComponent } from './favorit-movie.component';

describe('FavoritMovieComponent', () => {
  let component: FavoritMovieComponent;
  let fixture: ComponentFixture<FavoritMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
