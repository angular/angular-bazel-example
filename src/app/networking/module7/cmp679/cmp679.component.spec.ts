import {NO_ERRORS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSelectModule,} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { Cmp679Component } from './cmp679.component';

describe('Cmp679Component', () => {
  let component: Cmp679Component;
  let fixture: ComponentFixture<Cmp679Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp679Component],
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
    fixture = TestBed.createComponent(Cmp679Component);
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
