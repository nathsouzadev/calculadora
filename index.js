const horasDiarias = 8

const calcularSalario = () => {
  const diasTrabalhados = document.querySelector('#dias').value
  const valorHora = document.querySelector('#salario_hora').value
  const valorDia = valorHora * horasDiarias
  const salarioMes = valorDia * diasTrabalhados
  const salarioTotal = document.querySelector('#salario_total')
  salarioTotal.innerHTML = 'R$ ' + salarioMes.toFixed(2)
}

function calcularValorHora () {
  const diasTrabalhados = document.querySelector('#dias').value
  const salarioTotal = document.querySelector('#salario_total').value
  const valorHora = (salarioTotal / diasTrabalhados) / horasDiarias
  const salarioHora = document.querySelector('#valor_hora')
  salarioHora.innerHTML = 'R$ ' + valorHora.toFixed(2)
}
