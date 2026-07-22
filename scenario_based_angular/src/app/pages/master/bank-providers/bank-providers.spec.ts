import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankProviders } from './bank-providers';

describe('BankProviders', () => {
  let component: BankProviders;
  let fixture: ComponentFixture<BankProviders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(BankProviders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
