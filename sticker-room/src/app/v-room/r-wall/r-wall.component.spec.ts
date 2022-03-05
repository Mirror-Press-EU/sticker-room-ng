import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RWallComponent } from './r-wall.component';

describe('RWallComponent', () => {
  let component: RWallComponent;
  let fixture: ComponentFixture<RWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
