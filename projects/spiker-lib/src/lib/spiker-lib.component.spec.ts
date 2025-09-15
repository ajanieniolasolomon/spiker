import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpikerLibComponent } from './spiker-lib.component';

describe('SpikerLibComponent', () => {
  let component: SpikerLibComponent;
  let fixture: ComponentFixture<SpikerLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpikerLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpikerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
