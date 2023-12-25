import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLookupComponent } from './update-lookup.component';

describe('UpdateLookupComponent', () => {
  let component: UpdateLookupComponent;
  let fixture: ComponentFixture<UpdateLookupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLookupComponent]
    });
    fixture = TestBed.createComponent(UpdateLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
