import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  private contestants: string[];
  constructor() {
    this.contestants = [];
   }

  getContestants() : string[] {
    return this.contestants;
  }

  addContestant(newContestant: string | null) {
    if (newContestant === null || newContestant === ""){
      throw new Error('Constestant cannot be registered');
    } else if (this.constestants.includes(newContestant,0)){
      throw new Error('Constestant name already there!')
    }
    try {
      this.contestants.push(newContestant);
    } catch (exception){
      console.error(exception);
    }

  }
}
