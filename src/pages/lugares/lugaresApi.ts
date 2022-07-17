import Lugar from "./Lugar";

export function searchLugar(){
    if(!localStorage['lugares']){
        localStorage['lugares'] = '[]';
    }
    let lugares = localStorage['lugares'];
    lugares = JSON.parse(lugares);
    return lugares;
}

export function removeLugar(id: String){
    let lugares = searchLugar();

    let indice = lugares.findIndex((lugar:Lugar) => lugar.id == id);
    lugares.splice(indice, 1);
    localStorage['lugares'] = JSON.stringify(lugares);
    
}

export function saveLugar(lugar:Lugar){
    let lugares = searchLugar();
    if(lugar.id){
        let indice = lugares.findIndex((c:Lugar) => c.id == lugar.id);
        lugares[indice] = lugar;
    }else{
        lugar.id = String(Math.round(Math.random() *100000));
        lugares.push(lugar);
    }
    
    localStorage['lugares'] = JSON.stringify(lugares);
    
}

export function searchLugarById(id: string){
    let lugares = searchLugar();
    return lugares.find((lugar:any) => lugar.id == id);    
}