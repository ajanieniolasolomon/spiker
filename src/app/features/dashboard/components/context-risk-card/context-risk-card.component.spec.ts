import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextRiskCardComponent } from './context-risk-card.component';

describe('ContextRiskCardComponent', () => {
  let component: ContextRiskCardComponent;
  let fixture: ComponentFixture<ContextRiskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextRiskCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContextRiskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
