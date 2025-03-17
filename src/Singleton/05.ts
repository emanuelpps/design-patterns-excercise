class Logger {
  private static instance: Logger;
  public messages: string[] = [];

  private constructor() {}

  public static getInstance() {
    if (!Logger.instance) {
      return (Logger.instance = new Logger());
    }
    return Logger.instance;
  }

  logMessage(message: string){
   return this.messages.push(message);
  }

  getMessages(){
    return this.messages;
  }
}


const readMessageInstance = Logger.getInstance();

readMessageInstance.logMessage("essste mensaje");
readMessageInstance.logMessage("otro mensaje massss");

console.log(readMessageInstance.getMessages());