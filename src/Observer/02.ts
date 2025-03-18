/* 📝 1️⃣ Notificación de Ofertas en una Tienda
📌 Descripción: Simula una tienda que notifica a los clientes cuando hay descuentos.

Ejercicio
Crea una clase Store que maneje los suscriptores.
Permite que los clientes se suscriban con subscribe(callback).
Implementa un método notify(discount) que avise a los clientes sobre una nueva oferta. */

class Store {
  private suscribers: Function[] = [];

  newSuscriber(callback: Function) {
    this.suscribers.push(callback);
  }

  notify(notification: string) {
    this.suscribers.forEach((callback) => callback(notification));
  }
}

const suscriberPerson = new Store();

suscriberPerson.newSuscriber((notification: string) =>
  console.log(`nuevo descuento ${notification}`)
);

suscriberPerson.notify("descuento exclusivo")
