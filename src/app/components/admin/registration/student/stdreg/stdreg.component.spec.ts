import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdregComponent } from './stdreg.component';

describe('StdregComponent', () => {
  let component: StdregComponent;
  let fixture: ComponentFixture<StdregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdregComponent]
    });
    fixture = TestBed.createComponent(StdregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
