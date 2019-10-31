import * as ko from "knockout";

class StartViewModel {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>
    version: KnockoutObservable<number>

    constructor(language: string, framework: string, version: number) {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
        this.version = ko.observable(version);
    }
}

ko.applyBindings(new StartViewModel("TypeScript", "Knockout", 3));