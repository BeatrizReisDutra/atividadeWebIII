# 🧠 Atividade Web III

Este projeto é uma aplicação web simples desenvolvida com Flask, com foco em rotas, templates HTML, validação de formulários e estruturação de diretórios estáticos.

---
# 🚀 Tecnologias Utilizadas

- **Python 3**
- **Flask**
- **HTML5**
- **CSS3**
- **JavaScript**

---

## 📁 Estrutura do Projeto

```
├── static/
│   ├── css/
│   │   └── cadastro.css
│   │   ├── login.css
│   │   ├── stack.css
│   │   ├── style.css
│   │   └── usuario.css
│   ├── img/                  
│   │   ├── CSS3_logo.png
│   │   ├── Flask_logo.svg
│   │   ├── HTML5_logo.png
│   │   ├── js_logo.png
│   │   └── Python.png
│   └── js/
│       ├── cadastro.js
│       └── stack.js
│
├── templates/
│   ├── cadastro.html
│   ├── home.html
│   ├── login.html
│   ├── stack.html
│   └── usuario.html
│
└── main.py
```

---

## ⚙️ Funcionalidades Principais

✅ **Tela de Login**

Validação de senha via Regex:

- Mínimo de **6 caracteres**
- Pelo menos **uma letra maiúscula**
- Pelo menos **um número**
- Pelo menos **um caractere especial**

✅ **Página de Cadastro**

Página simples para cadastro de novos usuários.

✅ **Página do Usuário**

Exibe dados fixos (**nome**, **profissão** e **disciplina**) como exemplo de passagem de dados do back-end para o front-end.

✅ **Página Stack**

Mostra tecnologias utilizadas no projeto (**HTML**, **CSS**, **JS**, **Python**, **Flask**).

✅ **Página Home**

Acesso principal após o login bem-sucedido.

---

## ▶️ Como Executar o Projeto

1. Certifique-se de ter o **Python** instalado (3.8 ou superior).  
2. Instale o **Flask**:
   ```bash
   pip install flask
   ```
3. Execute o aplicativo:
   ```bash
   python main.py
   ```
4. Abra o navegador e acesse:
   ```
   http://localhost:8000/
   ```

---

##  Estrutura de Rotas

| Rota | Método | Descrição |
|------|---------|-----------|
| `/` | GET | Exibe a tela de login|
| `login` | POST | Valida senha e redireciona para a home  |
| `/home` | GET | Página inicial do sistema |
| `/usuario` | GET | Exibe os dados do usuário |
| `/cadastro` | GET | Página de cadastro|
| `/stack` | GET | Página com tecnologias utilizadas |

---

## 🧠 Lógica da Validação de Senha

O sistema valida se a senha contém:

- Pelo menos **6 caracteres**
- Pelo menos **1 letra maiúscula**
- Pelo menos **1 número**
- Pelo menos **1 caractere especial**

Exemplo de senha válida: `Senha@123`
