export class service{
    constructor(
       public s_id:number,
        public s_name:string,
        public s_description:string,
        public sc_id:number,
        public s_addedAt:Date,
        public s_updatedAt:Date,
        public s_status:number,
        public scount?:number
    ){}
}
