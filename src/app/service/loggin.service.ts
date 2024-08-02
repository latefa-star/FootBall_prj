import { Injectable } from "@angular/core";



export class LoggingService{

    log(msg: string):void
    {
        console.log('THIS IS A LOG MSG '+ msg);
    }
    constructor(){

    }
}