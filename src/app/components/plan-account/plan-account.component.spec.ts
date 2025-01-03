import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAccountComponent } from './plan-account.component';

describe('PlanAccountComponent', () => {
  let component: PlanAccountComponent;
  let fixture: ComponentFixture<PlanAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
