var Logger = /** @class */ (function () {
    function Logger() {
        this.mensaje = '';
    }
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.prototype.ShowMessage = function (mensaje) {
        this.mensaje = mensaje;
        return this.mensaje;
    };
    return Logger;
}());
var mensaje1 = Logger.getInstance();
console.log(mensaje1.ShowMessage("hola que tal"));
