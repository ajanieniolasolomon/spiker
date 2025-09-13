import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameoneCardComponent } from './frameone-card.component';

describe('FrameoneCardComponent', () => {
  let component: FrameoneCardComponent;
  let fixture: ComponentFixture<FrameoneCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameoneCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrameoneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
