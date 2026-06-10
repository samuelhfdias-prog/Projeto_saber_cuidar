import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdosoDetail } from './idoso-detail';

describe('IdosoDetail', () => {
  let component: IdosoDetail;
  let fixture: ComponentFixture<IdosoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdosoDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdosoDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
