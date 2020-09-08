export class packageservice_class{
  constructor(
    public ps_id:number,
     public pk_id:number,
     public s_id:number,
     public s_name:string,
     public s_description:string,
     public sc_id:number,
      public pk_name:string,
      public pk_description:string,
      public pk_price:number,
      public pk_discount:number,
      public pk_includedser:number,
      public pk_duration:number,
      public pk_addedAt:Date,
      public pk_updatedAt:Date,
      public pk_status:number,
      public sc_name:string,
      public i_id:number,
      public i_name:string,
      public i_addedAt:Date,
      public i_updatedAt:Date
  ){}
}
