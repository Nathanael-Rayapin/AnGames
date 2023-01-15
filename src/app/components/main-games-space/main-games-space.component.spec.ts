import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGamesSpaceComponent } from './main-games-space.component';

describe('MainGamesSpaceComponent', () => {
  let component: MainGamesSpaceComponent;
  let fixture: ComponentFixture<MainGamesSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGamesSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGamesSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
