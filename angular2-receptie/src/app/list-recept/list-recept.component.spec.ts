import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReceptComponent } from './list-recept.component';

describe('ListReceptComponent', () => {
  let component: ListReceptComponent;
  let fixture: ComponentFixture<ListReceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
