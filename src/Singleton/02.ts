/*Crea una clase Counter que siga el patrón Singleton y permita incrementar y obtener el valor del contador global.

🛠 Instrucciones
Crea una clase Counter con:

Un atributo privado count para almacenar el valor del contador.
Un método increment() para aumentar el contador.
Un método getCount() para obtener el valor actual.
Asegúrate de que solo haya una única instancia de la clase.
Usa la clase en dos variables diferentes y verifica que ambas afectan la misma instancia.*/

class Counter {
  private static instance: Counter;
  private count: number = 0;

  private constructor() {}

  public static getInstance(): Counter{
    if(!Counter.instance){
        Counter.instance = new Counter();
    }
    return Counter.instance
  }

  public increment(value: number) : void {
    this.count += value;
  }

  public getCount() : number{
    return this.count
  }
}
const counter1 = Counter.getInstance();
const counter2 = Counter.getInstance();

// Incrementar el contador usando la primera instancia
counter1.increment(2);
console.log(counter1.getCount()); // Salida: 2

// Incrementar el contador usando la segunda instancia
counter2.increment(10);
console.log(counter2.getCount()); // Salida: 12

// Verificar que ambas variables afectan la misma instancia
console.log(counter1 === counter2); // Salida: true