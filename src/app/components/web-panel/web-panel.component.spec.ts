import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPanelComponent } from './web-panel.component';

describe('WebPanelComponent', () => {
  let component: WebPanelComponent;
  let fixture: ComponentFixture<WebPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
