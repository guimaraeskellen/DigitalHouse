### Ana nos deixou com um problema mais interessante: quer saber o saldo dos meses com lucro!

function saldoDeMesesComLucro(periodo) {
    
  let quantidade= [];

  for (let mes=0; mes < periodo.length; mes++) {
    if (periodo[mes] > 0){

        var valor = periodo[mes]
        quantidade.push(valor)
    }

  }
  return quantidade
}
