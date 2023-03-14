interface ITeam {
  _id: number;
  name: string;
  logo: string;
  logoId: number;
  shortName: string;
}

export interface ICalendar {
  _id: number;
  tourNumber: number;
  teamHome: ITeam;
  teamAway: ITeam;
  scoreFtHome: number;
  scoreFtAway: number;
  date: string;
  stadium: {
    name: string
  };
}

export interface ISeasonCalendar {
  total: number;
  items: ICalendar[];
}

