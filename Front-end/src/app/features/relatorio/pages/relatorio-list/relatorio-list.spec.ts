import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioList } from './relatorio-list';

describe('RelatorioList', () => {
  let component: RelatorioList;
  let fixture: ComponentFixture<RelatorioList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
