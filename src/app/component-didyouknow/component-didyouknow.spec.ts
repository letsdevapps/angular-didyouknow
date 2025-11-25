import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDidyouknow } from './component-didyouknow';

describe('ComponentDidyouknow', () => {
  let component: ComponentDidyouknow;
  let fixture: ComponentFixture<ComponentDidyouknow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDidyouknow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDidyouknow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
