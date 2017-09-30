define("rxjs/operator/share", () => ({share: window.Rx.Observable.prototype.share.bind(window.Rx.Observable.prototype)}));
define("rxjs/observable/merge", () => ({merge: window.Rx.Observable.prototype.merge.bind(window.Rx.Observable.prototype)}));
define("rxjs/Observable", [], () => ({Observable: window.Rx.Observable}));
define("rxjs/Subject", () => ({Subject: window.Rx.Subject}));