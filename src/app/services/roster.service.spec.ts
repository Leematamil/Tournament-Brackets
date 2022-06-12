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
      service.addContestant('Olivia');
    }).toThrowError('Constestant name already exist');
  });
  it('should not allow null value', () => {
    let name: null = null;
    expect(function (){
      service.addContestant('name');
    }).toThrowError('Constestant name cannot be rigestered');
  });
  it('should not allow empty string name', () => {
    expect(function (){
      service.addContestant('');
    }).toThrowError('Constestant name cannot be rigestered');
  });
  it('should add one contestant', () => {
    service.addContestant('Selina');
    expect(service.getContestants().toString()).toEqual('Selina');
  })
});
