class News{
    private subscribers: Function[] = [];

    subscribe(callback: Function) {
        this.subscribers.push(callback);
    }

    notify(news: string){
        this.subscribers.forEach(callback => callback(news));
    }
}

const newsChannel = new News();

// Suscriptores
newsChannel.subscribe((news: string) => console.log(`Usuario 1 recibió: ${news}`));
newsChannel.subscribe((news: string) => console.log(`Usuario 2 recibió: ${news}`));

// Enviar noticias
newsChannel.notify("¡Nueva actualización disponible!");