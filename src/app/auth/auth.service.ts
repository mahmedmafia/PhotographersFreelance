import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class user {
    id:number;
    name: string;
    mail: string;
    password: string;
    type: string;
}
@Injectable({ providedIn: "root" })
export class AuthService {
    loggedUser = new BehaviorSubject<user>(null);
    private testuser: user = {
        id:1,
        name: 'testuser',
        mail: 'test@ts.com',
        password: '123456',
        type: 'hirer'
    };
    private testPhotographer: user = {
        id:2,
        name: 'testPhotographer',
        mail: 'test2@ts.com',
        password: '123456',
        type: 'photographer'
    };
    users: user[] = [
        this.testuser,
        this.testPhotographer
    ];
    private isLoggedin = false;
    login(mail, passsword) {
        // if (this.testuser.mail == mail && this.testuser.password == passsword) {
        //     this.isLoggedin = true;
        // }
        let user = this.users.find((x) => x.mail == mail && x.password == passsword);
        if(user){
            console.log(user);
            this.loggedUser.next(user);
            this.isLoggedin=true;
        }
    }
    isAuth() {
        return this.isLoggedin;
    }
    logout() {
        this.isLoggedin = false;
        this.loggedUser.next(null);
    }
}