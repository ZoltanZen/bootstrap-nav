import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavwithmoduleviewComponent } from './navwithmoduleview.component';

describe('NavwithmoduleviewComponent', () => {
  let component: NavwithmoduleviewComponent;
  let fixture: ComponentFixture<NavwithmoduleviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavwithmoduleviewComponent]
    });
    fixture = TestBed.createComponent(NavwithmoduleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
