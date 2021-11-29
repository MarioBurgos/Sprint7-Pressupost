import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasPanelComponent } from './extras-panel.component';

describe('WebPanelComponent', () => {
  let component: ExtrasPanelComponent;
  let fixture: ComponentFixture<ExtrasPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrasPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
