export interface ColleagueData {
    pseudo: string;
    photo: string;
    score: number;
}

export class Colleague {
    constructor(
      public pseudo: string,
      public photo: string,
      public score: number
    ) {}
  }

