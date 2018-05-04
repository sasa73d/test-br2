export class Photo {
  public id: number;
  public albumId: number;
  public title: string;
  public url: string;
  public thumbnailUrl: string;

  constructor(albumId: number, title: string, url: string, thumbnailUrl: string) {
    this.albumId = albumId;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
  }
}


