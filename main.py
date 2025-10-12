from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('home.html')

@app.route("/usuario")
def dados_usuario():
    dados_usu = {"nome": "Beatriz", "profissao": "Estudante", "disciplina":"Desenvolvimento Web III"}
    return render_template("usuario.html", dados = dados_usu)

if __name__ == '__main__':
    app.run(port=8000, debug=True)