export class ApiResponseModel<TEntity>{
  constructor(public result:TEntity,
              public code:Code=Code.Good,
              public message:string="") {
  }
}

export enum Code {
  Exception,
  Error,
  Token,
  Good
}
