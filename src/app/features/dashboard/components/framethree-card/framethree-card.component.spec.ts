import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramethreeCardComponent } from './framethree-card.component';

describe('FramethreeCardComponent', () => {
  let component: FramethreeCardComponent;
  let fixture: ComponentFixture<FramethreeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FramethreeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FramethreeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
