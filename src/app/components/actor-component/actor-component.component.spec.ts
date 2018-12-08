import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorComponentComponent } from './actor-component.component';

describe('ActorComponentComponent', () => {
  let component: ActorComponentComponent;
  let fixture: ComponentFixture<ActorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
