export class Todo {
    id: number;
    text: string;
    completed: false;


    constructor (id:number, text:string){
        this.id = id;
        this.text = text;
        this.completed = false;
        
    }
}
