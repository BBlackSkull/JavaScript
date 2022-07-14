class App {
    constructor(descargas,puntuacion,peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalda = false;
    }
    abrir(){
        if (this.iniciada == false) {
            this.iniciada = true;
            alert("app encendida");
        }
    }
    cerrar(){
        if (this.iniciada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar(){
        if(this.instalada == false) {
            this.instalda = true;
            if(this.instalada == true) { 
           
            alert("app instalada correctamente");
            }
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalda = false;
            alert("app desinstalada correctamente");
        }
    }
}
App.instalar()
App.abrir()
App.cerrar()
App.desinstalar()
