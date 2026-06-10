import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdosoList } from './idoso-list';

describe('IdosoList', () => {
  let component: IdosoList;
  let fixture: ComponentFixture<IdosoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdosoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdosoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
