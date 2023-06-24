import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassWiseListComponent } from './class-wise-list.component';

describe('ClassWiseListComponent', () => {
  let component: ClassWiseListComponent;
  let fixture: ComponentFixture<ClassWiseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassWiseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassWiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
