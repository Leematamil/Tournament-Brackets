import { TestBed } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService', () => {
  let service: RosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterService);
  });

  it('should not allow duplicate contestant name', () => {
    service.addContestant('Olivia');
    expect(function (){
    }).toThrowError('Constestant name already exist');
  });

});
