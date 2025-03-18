/* 📝 1️⃣ Notificación de Ofertas en una Tienda
📌 Descripción: Simula una tienda que notifica a los clientes cuando hay descuentos.

Ejercicio
Crea una clase Store que maneje los suscriptores.
Permite que los clientes se suscriban con subscribe(callback).
Implementa un método notify(discount) que avise a los clientes sobre una nueva oferta. */
var Store = /** @class */ (function () {
    function Store() {
        this.suscribers = [];
    }
    Store.prototype.newSuscriber = function (callback) {
        this.suscribers.push(callback);
    };
    Store.prototype.notify = function (notification) {
        this.suscribers.forEach(function (callback) { return callback(notification); });
    };
    return Store;
}());
var suscriberPerson = new Store();
suscriberPerson.newSuscriber(function (notification) {
    return console.log("nuevo descuento ".concat(notification));
});
suscriberPerson.notify("descuento exclusivo");
