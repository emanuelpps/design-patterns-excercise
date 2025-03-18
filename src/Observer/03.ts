class ChatGroup {
  private suscribe: Function[] = [];

  suscriberFunction(calllback: Function) {
    this.suscribe.push(calllback);
  }

  notify(message: string) {
    this.suscribe.forEach((callback) => callback(message));
  }
}

const newGroup = new ChatGroup;

newGroup.suscriberFunction((notification: string) => {
    console.log(`recibiste una nueva ${notification}`)
})

newGroup.notify("notificacion")
