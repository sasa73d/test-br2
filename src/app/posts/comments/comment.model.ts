export class Comment {
  public postId: number;
  public id: number;
  public name: string;
  public email: string;
  public body: string;

  constructor(postId: number, name: string, email: string, body: string) {
    this.postId = postId;
    this.name = name;
    this.email = email;
    this.body = body;
  }

}
