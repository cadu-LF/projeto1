// a ideia desse projeto é facilitar o cálculo da divisão de uma conta, que envolva mais de uma categoria.

let principal = () => {
    var itens = []
    let familias = []
    let total = []
    let opcao 
    do{
        opcao = Number(prompt(`Informe a opção desejada: \n[1] - Cadastrar novo item a ser dividido \n[2] - Cadastrar uma familia \n[3] - Mostrar a quanto cada família vai gastar \n[4] - Sair do programa`))
        switch(opcao){
            case 1: cadastraItem(itens)
                    break
            case 2: cadastraFamilia(familias, itens)
                    break
            case 3: calcula(itens, familias, total)
                    break
            case 4: alert(`Obrigado por utilizar esse software`)
                    console.log(itens)
                    console.log(familias)
                    console.log(total)
                    break
            default: alert('Opção digitada inexistente')
        }
    }
    while(opcao != 4)
}

let cadastraItem = (item) =>{
    let objeto = new Object()
    objeto.nome = prompt('Informe o nome do item que será parte da conta: ')
    objeto.total = 0
    let achou = item.some( (item) => {
                return item.nome == objeto.nome
    })
    if(achou == false){
        item.push(objeto)
        alert(`Cadastro realizado com sucesso`)
    }
    else{
        alert(`Cadastro não realizado: Item já cadastrado`)
        return
    }
}

var cadastraFamilia = (familia, item) => {
    let objeto = new Object()
    objeto.nome = prompt('Informe o nome da família: ')
    objeto.qtd = Number(prompt('Informe a quantidade de membros da familia, que participarão da conta: '))
    let gastos = []
    item.forEach( (item) => {
        gastos.push(Number(prompt(`Informe quanto foi gasto em: ${item.nome}`)))
    })
    console.log(gastos)
    objeto.gastos = gastos
    console.log(objeto.gastos)
    objeto.media = 0
    let achou = familia.some( (familia) => {
        return familia.nome == objeto.nome
    })
    if (achou == false){
        familia.push(objeto)
        alert(`Cadastro realizado com sucesso`)
    }
    else{
        alert(`Cadastro não efetuado: Nome da família já existente`)
    }
}

function calcula(){

}

let menssagens = (i, f, t) => {
    
}

principal()