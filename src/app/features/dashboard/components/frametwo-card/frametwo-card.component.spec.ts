import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrametwoCardComponent } from './frametwo-card.component';

describe('FrametwoCardComponent', () => {
  let component: FrametwoCardComponent;
  let fixture: ComponentFixture<FrametwoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrametwoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrametwoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
