import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextAnalyticCardComponent } from './context-analytic-card.component';

describe('ContextAnalyticCardComponent', () => {
  let component: ContextAnalyticCardComponent;
  let fixture: ComponentFixture<ContextAnalyticCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextAnalyticCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContextAnalyticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
