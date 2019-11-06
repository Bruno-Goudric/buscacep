var inputElement = document.querySelector('input');

function listRepos(){
    if(!inputElement.value) return;
        axios.get('https://viacep.com.br/ws/' + inputElement.value + '/json')
        .then(resposta => mostrarResposta(resposta.data))           
        .catch(erro => alert('Cep não encontrado!'));
    }

                
function mostrarResposta(cep) {
    const mensagem = `
        CEP: ${cep.cep},
        Logradouro: ${cep.logradouro},
        Bairro: ${cep.bairro},
        Cidade ${cep.localidade},
        Estado: ${cep.uf}
           `;
        alert(mensagem);
    }