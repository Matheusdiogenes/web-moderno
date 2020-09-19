const sequencia = {
    _valor: 1,
    get valor() {return `get ${this._valor++}`},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
//get
console.log(sequencia.valor);
//set
sequencia.valor = 10
