import { Injectable }               from '@angular/core';
import { Response }                 from '@angular/http';
import { Router, NavigationStart }  from '@angular/router';
import { Observable }               from 'rxjs/Rx';
import { Subject }                  from 'rxjs/Subject';

@Injectable()
export class AlertService {
    private subject = new Subject<any>();

    constructor (private router:Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.subject.next();
            }
        });
    }

    dispatch (res:Response|[string, number]) {
        let message:string, status:number;

        if (res instanceof Response) {
            message = res.text();
            status = res.status;
        }
        else {
            message = res[0];
            status = res[1];
        }

        switch (status) {
            case 200:
                this.success(message);
                break;
            case 205:
                this.announce(message);
                break;
            case 400:
                this.error(message);
                break;
            case 401:
                localStorage.removeItem('id');
                localStorage.removeItem('token');
                localStorage.removeItem('addon');
                localStorage.removeItem('email');
                this.router.navigate(['login']);
                break;
            default:
                console.log("Not supported status [" + status + "] : " + message);
                break;
        }
    }

    clear () {
        this.subject.next({status: '', text: null});
    }

    getMessage ():Observable<any> {
        return this.subject.asObservable();
    }

    private success (message:string) {
        this.subject.next({status: 'success', text: message});
    }

    private error (message:string) {
        this.subject.next({status: 'danger', text: message});
    }

    private announce (message:string) {
        this.subject.next({status: 'announce', text: message});
    }
}