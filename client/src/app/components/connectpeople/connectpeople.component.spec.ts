import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectpeopleComponent } from './connectpeople.component';

describe('ConnectpeopleComponent', () => {
  let component: ConnectpeopleComponent;
  let fixture: ComponentFixture<ConnectpeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectpeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
