export class CommentModel {
  constructor(public Id: number,
              public Name: string,
              public Email: string,
              public Message: string,
              public Time: Date,
              public IdUser: number) {
  }
}
