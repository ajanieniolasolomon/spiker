import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerabilitiesCardComponent } from './vulnerabilities-card.component';

describe('VulnerabilitiesCardComponent', () => {
  let component: VulnerabilitiesCardComponent;
  let fixture: ComponentFixture<VulnerabilitiesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VulnerabilitiesCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VulnerabilitiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
