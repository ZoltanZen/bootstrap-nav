import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatepageComponent } from './navigatepage.component';

describe('NavigatepageComponent', () => {
  let component: NavigatepageComponent;
  let fixture: ComponentFixture<NavigatepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigatepageComponent]
    });
    fixture = TestBed.createComponent(NavigatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
