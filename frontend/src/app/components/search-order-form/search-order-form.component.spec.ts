import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrderFormComponent } from './search-order-form.component';

describe('SearchOrderFormComponent', () => {
  let component: SearchOrderFormComponent;
  let fixture: ComponentFixture<SearchOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchOrderFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
