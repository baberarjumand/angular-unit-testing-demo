import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';

describe('PersonService', () => {
  let service: PersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have zero person records initially', (done) => {
    service.getPersons().then((resArr) => {
      const tempPersonArr = resArr;
      expect(tempPersonArr.length).toEqual(0);
      done();
    });
  });

  it('should simulate adding two then removing one person', (done) => {
    service.addPerson();
    service.addPerson();
    service.deletePerson();

    service.getPersons().then((resArr) => {
      // const tempPersonArr = resArr;
      expect(resArr.length).toEqual(1);
      done();
    });
  });
});
