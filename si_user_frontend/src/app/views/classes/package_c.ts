export class package_class{
  constructor(
     public pk_id:number,
      public pk_name:string,
      public pk_description:string,
      public pk_price:number,
      public pk_discount:number,
      public pk_includedser:number,
      public pk_duration:number,
      public pk_addedAt:Date,
      public pk_updatedAt:Date,
      public pk_status:number,
      public pcount?:number
  ){}
}
