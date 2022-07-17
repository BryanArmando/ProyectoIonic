import Hueca from "./Hueca";

export function searchHueca(){
    if(!localStorage['huecas']){
        localStorage['huecas'] = '[]';
    }
    let huecas = localStorage['huecas'];
    huecas = JSON.parse(huecas);
    return huecas;
}

export function removeHueca(id: String){
    let huecas = searchHueca();

    let indice = huecas.findIndex((hueca:Hueca) => hueca.id == id);
    huecas.splice(indice, 1);
    localStorage['huecas'] = JSON.stringify(huecas);
    
}

export function saveHueca(hueca:Hueca){
    let huecas = searchHueca();
    if(hueca.id){
        let indice = huecas.findIndex((c:Hueca) => c.id == hueca.id);
        huecas[indice] = hueca;
    }else{
        hueca.id = String(Math.round(Math.random() *100000));
        huecas.push(hueca);
    }
    
    localStorage['huecas'] = JSON.stringify(huecas);
    
}

export function searchHuecaById(id: string){
    let huecas = searchHueca();
    return huecas.find((hueca:any) => hueca.id == id);    
}