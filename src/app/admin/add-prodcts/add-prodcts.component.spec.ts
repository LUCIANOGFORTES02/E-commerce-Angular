import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdctsComponent } from './add-prodcts.component';

describe('AddProdctsComponent', () => {
  let component: AddProdctsComponent;
  let fixture: ComponentFixture<AddProdctsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProdctsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProdctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
