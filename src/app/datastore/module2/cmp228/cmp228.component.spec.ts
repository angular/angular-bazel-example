import {NO_ERRORS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSelectModule,} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { Cmp228Component } from './cmp228.component';

describe('Cmp228Component', () => {
  let component: Cmp228Component;
  let fixture: ComponentFixture<Cmp228Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp228Component],
          imports: [
            NoopAnimationsModule,
            ReactiveFormsModule,
            MatButtonModule,
            MatCardModule,
            MatInputModule,
            MatRadioModule,
            MatSelectModule,
          ],
          schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Make the test more realistic by doing lots of assertions
  for (let i = 0; i < 50; i++) {
    it('should compile', () => {
      expect(component).toBeTruthy();
    });
  }
});
