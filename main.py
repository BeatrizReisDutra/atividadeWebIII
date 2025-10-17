from flask import Flask, render_template, request, redirect, url_for, flash
import re
app = Flask(__name__)
app.secret_key = 'sua_chave_secreta_aqui'

REGEX_CARACTER_ESPECIAL = r'[!@#$%^&*()_+=\-{}\[\]:;"\'<>,.?/\\|~`]'

@app.route('/home')
def homepage():
    return render_template('home.html')

@app.route('/usuario')
def dados_usuario():
    dados_usu = {"nome": "Beatriz", "profissao": "Estudante", "disciplina":"Desenvolvimento Web III"}
    return render_template("usuario.html", dados = dados_usu)

@app.route('/')
def login_get():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login_post():

    senha = request.form.get('senha')

    if not senha:
        flash('Senha é obrigatória.', 'error')
        return redirect(url_for('login_get'))
    
    if validar_senha(senha):
        flash('Login realizado com sucesso!', 'sucesso')
        return redirect(url_for('homepage'))
    else:
        flash('A senha deve conter pelo menos 6 caracteres, incluindo letras maiúsculas, números e caracteres especiais.', 'error')
        return redirect(url_for('login_get'))
    
def validar_senha(senha):
    if (len(senha) < 6 or
        not re.search(r'[A-Z]', senha) or
        not re.search(r'[0-9]', senha) or
        not re.search(REGEX_CARACTER_ESPECIAL, senha)):
        return False
    return True

@app.route('/cadastro')
def cadastro():
    return render_template('cadastro.html')

if __name__ == '__main__':
    app.run(port=8000, debug=True)