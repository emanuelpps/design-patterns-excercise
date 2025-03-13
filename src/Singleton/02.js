/*Crea una clase Counter que siga el patrón Singleton y permita incrementar y obtener el valor del contador global.

🛠 Instrucciones
Crea una clase Counter con:

Un atributo privado count para almacenar el valor del contador.
Un método increment() para aumentar el contador.
Un método getCount() para obtener el valor actual.
Asegúrate de que solo haya una única instancia de la clase.
Usa la clase en dos variables diferentes y verifica que ambas afectan la misma instancia.*/
var Counter = /** @class */ (function () {
    function Counter() {
        this.count = 0;
    }
    Counter.getInstance = function () {
        if (!Counter.instance) {
            Counter.instance = new Counter();
        }
        return Counter.instance;
    };
    Counter.prototype.increment = function (value) {
        this.count += value;
    };
    Counter.prototype.getCount = function () {
        return this.count;
    };
    return Counter;
}());
var counter1 = Counter.getInstance();
var counter2 = Counter.getInstance();
// Incrementar el contador usando la primera instancia
counter1.increment(2);
console.log(counter1.getCount()); // Salida: 2
// Incrementar el contador usando la segunda instancia
counter2.increment(10);
console.log(counter2.getCount()); // Salida: 12
// Verificar que ambas variables afectan la misma instancia
console.log(counter1 === counter2); // Salida: true
