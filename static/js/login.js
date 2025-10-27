
document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('senha');
    const form = passwordField.closest('form');
    const submitButton = document.getElementById('submitButton');
    
    // Elementos de feedback
    const valLength = document.getElementById('val-length');
    const valUppercase = document.getElementById('val-uppercase');
    const valNumber = document.getElementById('val-number');
    const valSpecial = document.getElementById('val-special');
    
    // Expressão Regular para Caracteres Especiais (compatível com sua REGEX do Flask)
    // Inclui: !@#$%^&*()_+={}[\]:;"'<>,.?/\\|~`
    const REGEX_CARACTER_ESPECIAL = /[!@#$%^&*()_+=\-{}[\]:;"'<>,.?/\\|~`]/;

    /**
     * Atualiza a classe CSS do item de validação e o ícone.
     * @param {HTMLElement} element - O elemento <li> a ser atualizado.
     * @param {boolean} isValid - True se o critério for atendido.
     */
    function updateValidationItem(element, isValid) {
        // Conteúdo original do critério, sem o ícone.
        const originalText = element.getAttribute('data-text');
        
        if (isValid) {
            element.classList.add('valid');
            element.classList.remove('invalid');
            // Ícone de Sucesso (Tick)
            element.innerHTML = '&#10003; ' + originalText; 
        } else {
            element.classList.add('invalid');
            element.classList.remove('valid');
            // Ícone de Erro (X)
            element.innerHTML = '&#10007; ' + originalText; 
        }
    }
    
    /**
     * Realiza a validação completa da senha.
     * @returns {boolean} True se a senha atende a todos os critérios.
     */
    function validatePassword() {
        const password = passwordField.value;
        
        // 1. Mínimo 6 caracteres
        const hasMinLength = password.length >= 6;
        updateValidationItem(valLength, hasMinLength);

        // 2. Pelo menos 1 letra maiúscula
        const hasUppercase = /[A-Z]/.test(password);
        updateValidationItem(valUppercase, hasUppercase);

        // 3. Pelo menos 1 número
        const hasNumber = /[0-9]/.test(password);
        updateValidationItem(valNumber, hasNumber);

        // 4. Pelo menos 1 caractere especial
        const hasSpecial = REGEX_CARACTER_ESPECIAL.test(password);
        updateValidationItem(valSpecial, hasSpecial);

        // A senha é válida se todos os critérios forem atendidos
        const isPasswordValid = hasMinLength && hasUppercase && hasNumber && hasSpecial;

        // Controla o botão de submit: desabilita se a senha for inválida
        submitButton.disabled = !isPasswordValid;
        
        return isPasswordValid;
    }

    // 1. Configura o texto original para uso com ícones (apenas na primeira carga)
    [valLength, valUppercase, valNumber, valSpecial].forEach(item => {
        item.setAttribute('data-text', item.textContent);
    });

    // 2. Adiciona o listener para validar a senha em cada tecla
    passwordField.addEventListener('keyup', validatePassword);
    passwordField.addEventListener('focus', validatePassword);
    passwordField.addEventListener('blur', validatePassword);

    // 3. Adiciona o listener para impedir o envio do formulário se a validação falhar no clique final
    form.addEventListener('submit', function(event) {
        if (!validatePassword()) {
            // Impede o envio se o botão foi reabilitado por algum motivo ou se o usuário tentou enviar rapidamente
            event.preventDefault(); 
            // Opcional: Adicionar feedback mais visível aqui.
            console.log('Envio bloqueado: a senha não atende aos requisitos.');
        }
    });

    // Inicializa a validação (para o caso de o campo já ter um valor ou para desabilitar o botão)
    validatePassword();
});
