import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBinBoxComponent } from './add-bin-box.component';

describe('AddBinBoxComponent', () => {
  let component: AddBinBoxComponent;
  let fixture: ComponentFixture<AddBinBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBinBoxComponent]
    });
    fixture = TestBed.createComponent(AddBinBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
