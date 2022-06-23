class Q{
    text:string;
    id:string;
    Author:string;
    constructor(quote:string,Author:string)
    {
        this.text=quote;
        this.Author=Author;
        this.id=new Date().toISOString();
    }

}
export default Q;