export class Album {
  public userId: number;
  public id: number;
  public title: string;

  constructor(userId: number, title: string) {
    this.userId = userId;
    this.title = title;
  }
}
