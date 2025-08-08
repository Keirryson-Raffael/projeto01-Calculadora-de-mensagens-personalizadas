const nome = "Frederico"
let idade = 28
let cidade = "Belo Horizonte"
let profissão = "Dramaturgo"
let anoAtual = 2025
let salario = 68567
let bonus = 30271

let anoNascimento = anoAtual - idade
let totalMensal = salario + bonus
let totalAno = totalMensal * 12
let totalAnualD = totalAno * 2

alert(`========= Relatório do Usuario =========
    Nome: ${nome}
    Idade: ${idade}
    Ano de nascimento: ${anoNascimento}
    Cidade: ${cidade}
    Profissão: ${profissão}
    Salário U$${salario}
    Bônus: U$${bonus}
    Total mensal: U$${totalMensal}
    Total Ano: U$${totalAno}
    Total Anual (Dobrado): U$${totalAnualD}

    ===========================================`)
