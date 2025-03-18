var News = /** @class */ (function () {
    function News() {
        this.subscribers = [];
    }
    News.prototype.subscribe = function (callback) {
        this.subscribers.push(callback);
    };
    News.prototype.notify = function (news) {
        this.subscribers.forEach(function (callback) { return callback(news); });
    };
    return News;
}());
var newsChannel = new News();
// Suscriptores
newsChannel.subscribe(function (news) { return console.log("Usuario 1 recibi\u00F3: ".concat(news)); });
newsChannel.subscribe(function (news) { return console.log("Usuario 2 recibi\u00F3: ".concat(news)); });
// Enviar noticias
newsChannel.notify("¡Nueva actualización disponible!");
