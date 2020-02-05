import { ClickOverDirective } from './click-over.directive';
import {ElementRef} from '@angular/core';
import {TestBed} from '@angular/core/testing';


describe('ClickOverDirective', () => {
  let elementRef: ElementRef;
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [{provide: ElementRef}]});
    elementRef = TestBed.get(ElementRef);
  });
  it('should create an instance', () => {
    const directive = new ClickOverDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
