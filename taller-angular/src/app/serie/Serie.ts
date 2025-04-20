export class Serie {
  public id: number;
  public name: string;
  public channel: string;
  public seasons: number;

  constructor(
    id: number,
    name: string,
    channel: string,
    seasons: number
  ) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
  }
}
