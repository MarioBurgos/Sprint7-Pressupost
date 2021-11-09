import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputWButtonsComponent } from './my-input-w-buttons.component';

describe('MyInputWButtonsComponent', () => {
  let component: MyInputWButtonsComponent;
  let fixture: ComponentFixture<MyInputWButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInputWButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInputWButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
