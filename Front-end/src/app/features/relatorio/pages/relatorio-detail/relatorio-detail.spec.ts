import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDetail } from './relatorio-detail';

describe('RelatorioDetail', () => {
  let component: RelatorioDetail;
  let fixture: ComponentFixture<RelatorioDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
