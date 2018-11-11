import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcodbComponent } from './icodb.component';

describe('IcodbComponent', () => {
  let component: IcodbComponent;
  let fixture: ComponentFixture<IcodbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcodbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcodbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
