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
    }).toThrowError('Constestant name already there!');
  });
  it('should not allow null value', () => {
    let name: string = null;
    expect(function (){
      service.addContestant(name);
    }).toThrowError('Constestant cannot be registered');
  });
  it('should not allow empty string name', () => {
    expect(function (){
      service.addContestant('');
    }).toThrowError('Constestant cannot be registered');
  });
  it('should add one contestant', () => {
    service.addContestant('Selina');
    expect(service.getContestants().toString()).toEqual('Selina');
  })
  it('should add several contestant', () => {
    service.addContestant('Selina');
    service.addContestant('Olivia');
    service.addContestant('Tamil');
    service.addContestant('Leema');
    expect(service.getContestants().toString()).toEqual('Selina,Olivia,Tamil,Leema');
  })
});
