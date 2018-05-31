export class Post {
  public userId: number;
  public id: number;
  public title: string;
  public body: string;

  constructor(userId: number, title: string, body: string) {
    this.userId = userId;
    this.title = title;
    this.body = body;
  }
}
