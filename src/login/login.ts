import * as ko from "knockout";

export class LoginViewModel {
    username: KnockoutObservable<string>
    password: KnockoutObservable<string>

    constructor(username: string, password: string) {
        this.username = ko.observable(username);
        this.password = ko.observable(password);        
    }

    login(username: string, password:string):boolean {
        return (username === 'heppa' && password === 'heppa') ? true : false
    }

    tmp():string {
        return "heppa";
    }
}

ko.applyBindings(new LoginViewModel("", ""));