import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReadDetailsComponent } from './product-read-details.component';

describe('ProductReadDetailsComponent', () => {
  let component: ProductReadDetailsComponent;
  let fixture: ComponentFixture<ProductReadDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductReadDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
