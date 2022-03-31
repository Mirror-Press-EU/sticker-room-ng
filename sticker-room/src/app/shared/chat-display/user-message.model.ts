export class UserMessage {

  constructor(
    public authorName:string/*ProfilData*/="test-user",
    public authorId:string="test01",
    public date:number=Date.now( ),
    public text:string="*nothing*"
  ) { }

}
