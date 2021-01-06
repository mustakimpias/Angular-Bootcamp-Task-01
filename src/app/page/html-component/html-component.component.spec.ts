import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlComponentComponent } from './html-component.component';

describe('HtmlComponentComponent', () => {
  let component: HtmlComponentComponent;
  let fixture: ComponentFixture<HtmlComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
