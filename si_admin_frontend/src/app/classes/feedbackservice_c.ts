export class feedbackservice_class{
    constructor(
        public f_id :  number,
        public f_experience : string,
        public f_comment : string,
        public p_mobile : string,
        public p_name : string,
        public p_password : string,
        public p_address : string,
        public p_pincode : number,
        public p_id : number,
        public p_addedAt : Date,
        public p_updatedAt : Date,
        public p_status : number,
        public p_loginattempts : number
    ){}
}
