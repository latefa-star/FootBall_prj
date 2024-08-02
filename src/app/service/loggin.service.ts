import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class LoggingService{

    num:number=0;
    log(msg: string):void
    {
        console.log('THIS IS A LOG MSG '+ msg);
    }
    increment()
    {
        console.log(this.num++);
    }
    constructor(){

    }
}