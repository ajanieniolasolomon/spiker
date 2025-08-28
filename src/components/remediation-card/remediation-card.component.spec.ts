import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemediationCardComponent } from './remediation-card.component';

describe('RemediationCardComponent', () => {
  let component: RemediationCardComponent;
  let fixture: ComponentFixture<RemediationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemediationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemediationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
