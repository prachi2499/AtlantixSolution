export class packagepurchase_class{
  constructor(
     public pp_id:number,
      public p_mobile:string,
      public pp_date:Date,
      public pp_amount:number,
      public pk_id:number,
      public pp_endDate:string,
      public pk_name? :string,
      public s_id?:number,
      public s_name?:string,
      public sc_id?:number,
      public sc_name?:string,
      public om_id?:number,
      public om_status?:number,
      public flag1?:string
  ){}
}
