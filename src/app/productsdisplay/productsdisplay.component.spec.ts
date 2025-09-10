import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsdisplayComponent } from './productsdisplay.component';

describe('ProductsdisplayComponent', () => {
  let component: ProductsdisplayComponent;
  let fixture: ComponentFixture<ProductsdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsdisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
