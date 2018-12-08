import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsComponentComponent } from './actors-component.component';

describe('ActorsComponentComponent', () => {
  let component: ActorsComponentComponent;
  let fixture: ComponentFixture<ActorsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
