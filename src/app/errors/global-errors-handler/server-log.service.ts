import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment'
import { ServerLog } from "./server-log";

const ServeLog_API = environment.ServerLog

@Injectable({ providedIn: "root" })
export class ServerLogService {

    constructor(private http: HttpClient){}

    log(log: ServerLog){
        return this.http.post(ServeLog_API + '/infra/log', log)
    }
}