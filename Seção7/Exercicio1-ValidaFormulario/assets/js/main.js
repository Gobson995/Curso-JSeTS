class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.checkCampos();
        const senhasValidas = this.checksenhas();

        if(camposValidos && senhasValidas) {
            alert('Formulario enviado');
            this.formulario.submit();
        }
    }

    checksenhas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid.false;
            this.createErr(senha, 'Campos Senha e Repetir Senha precisamser iguais.');
            this.createErr(repetirSenha, 'Campos Senha e Repetir Senha precisamser iguais.');
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.createErr(senha, 'A senha precisar ter entre 6 e 12 caracteres.'); 
        }

        return valid;

    }

    checkCampos() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.createErr(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;

        let valid = true;

        if (usuario.length > 12 || usuario.length < 3) {
            this.createErr(campo, 'Usuário precisar ter entre 3 e 12 caracteres.');
            valid = false;
        }

       if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.createErr(campo, 'Nome de usuário precisar conter apenas letras e/ou números');
            valid = false;
        }
        
        return valid;
    }
 
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.createErr(campo, 'CPF inválido.');
            return false;
        }
        
        return true;
    }

    createErr(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }


}

const valida = new ValidaFormulario();