const form = document.getElementById('cadastroForm');
const senhaInput = document.getElementById('senha');
const confirmarSenhaInput = document.getElementById('confirmar_senha');
const messageBox = document.getElementById('messageBox');

// Função utilitária para exibir mensagens (substituindo o alert())
function showMessage(message, type) {
    // type pode ser 'error' ou 'success'
    messageBox.textContent = message;
    messageBox.className = ''; // Reseta classes
    messageBox.classList.add(type);
    messageBox.style.display = 'block';
}

// Função de validação principal
function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;

    // 1. Verificar se os campos Senha e Confirmação de Senha são iguais
    if (senha !== confirmarSenha) {
        
        // Exibe a mensagem de erro customizada (substituindo alert())
        const errorMessage = 'As senhas digitadas não são iguais. Por favor, verifique.';
        showMessage(errorMessage, 'error');
        
        // Opcional: Limpar ou focar o campo de senha para correção
        senhaInput.focus();
        
        return; // Impede o processamento do cadastro
    }

    // Se as senhas forem iguais, prossegue com a simulação de cadastro
    messageBox.style.display = 'none'; // Esconde a mensagem anterior, se houver
    
    // Simulação de envio
    showMessage('Cadastro enviado com sucesso! Aguarde o processamento...', 'success');

    // Aqui você enviaria os dados para o servidor usando fetch() ou XMLHttpRequest
    console.log('Dados prontos para envio:', {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        endereco: document.getElementById('endereco').value,
        // Nota: Senha real não deve ser logada, apenas o hash dela.
        senha: senha, 
    });

    // Opcional: Limpar o formulário após 2 segundos
    setTimeout(() => {
        form.reset();
        messageBox.style.display = 'none';
    }, 2000);
}

// Adiciona o listener de evento ao formulário
form.addEventListener('submit', handleFormSubmit);