function myTeam(team){
    try{
        if(team == 'flamengo'){
            return true
        }else{
            erro()
        }
    }catch (err){
        erro(err)
    }
}
function erro(){
    //trata o erro
    throw 'time não encontrado'
}

console.log(myTeam('flamengo'));
