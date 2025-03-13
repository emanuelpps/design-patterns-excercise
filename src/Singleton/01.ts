// crear una clase language con el valor es, obten su valor desde otra instancia

class LanguageInstance {
    public static instance: LanguageInstance;
    public language: string;

    private constructor() {
        this.language = "es";
    }

    static getInstance(): LanguageInstance {
        if(!LanguageInstance.instance){
            LanguageInstance.instance = new LanguageInstance();
        }
        return LanguageInstance.instance;
    }
}


const getThisInstance = LanguageInstance.getInstance();

console.log(getThisInstance.language)