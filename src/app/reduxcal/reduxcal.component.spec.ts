import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxcalComponent } from './reduxcal.component';

describe('ReduxcalComponent', () => {
  let component: ReduxcalComponent;
  let fixture: ComponentFixture<ReduxcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReduxcalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReduxcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
