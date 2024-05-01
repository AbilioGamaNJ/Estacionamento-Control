function Cadastrar() {
    let placaVeiculo = document.getElementById("placa_veiculo").value;
    let nomeProprietario = document.getElementById("nome_proprietario").value;
    let numeroApartamento = document.getElementById("numero_apartamento").value;
    let blocoApartamento = document.getElementById("bloco_apartamento").value;
    let modeloVeiculo = document.getElementById("modelo_veiculo").value;
    let corVeiculo = document.getElementById("cor_veiculo").value;
    let numeroVaga = document.getElementById("numero_vaga").value;

  console.log("Placa do Veículo: " + placaVeiculo);
  console.log("Nome do Proprietário: " + nomeProprietario);
  console.log("Número do Apartamento: " + numeroApartamento);
  console.log("Bloco do Apartamento: " + blocoApartamento);
  console.log("Modelo de Veículo: " + modeloVeiculo);
  console.log("Cor do Veículo: " + corVeiculo);
  console.log("Nº da vaga do estacionamento: " + numeroVaga);
  
  const campo = document.querySelector('#placa_veiculo');
  campo.value = ''
  const campo2 = document.querySelector('#nome_proprietario');
  campo2.value = ''
  const campo3 = document.querySelector('#numero_apartamento');
  campo3.value = ''
  const campo4 = document.querySelector('#bloco_apartamento');
  campo4.value = ''
  const campo5 = document.querySelector('#modelo_veiculo');
  campo5.value = ''
  const campo6 = document.querySelector('#cor_veiculo');
  campo6.value = ''
  const campo7 = document.querySelector('#numero_vaga');
  campo7.value = ''

  alert('Cadastrado com sucesso!')
}