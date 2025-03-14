class Logger {
    private static instance: Logger;
    public mensaje: string;

    constructor(){
        this.mensaje = ''
    }

    public static getInstance(): Logger{
        if(!Logger.instance){
            Logger.instance = new Logger();
        }
        return Logger.instance
    }

    public ShowMessage(mensaje: string) : string{
        this.mensaje = mensaje;
        return this.mensaje
    }
}

const mensaje1 = Logger.getInstance();

console.log(mensaje1.ShowMessage("hola que tal"))