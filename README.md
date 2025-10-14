# atividadeWebIII

Este projeto foi desenvolvido como parte dos estudos de **Desenvolvimento Web III** utilizando o framework **Flask** (Python).  
O objetivo é compreender o funcionamento das **rotas**, **templates HTML**.

---

## 📁 Estrutura do Projeto

```
├── static/
│   ├── css/
│   │   └── estilo.css
│   ├── imagens/
│   │   ├── 
│   │   ├── 
│   │   └── 
│   └── js/
│       ├── 
│       ├── 
│       └── script.js
│
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── 
│   ├── login.html
│   └── usuario.html
│
├── main.py
└── appImport.py
```

---

## ⚙️ Funcionalidades Principais

- Página inicial (`/`)
- Página de contato (`/contato`)
- Página de login (`/login`)
- Página de usuário com parâmetros dinâmicos (`/usuarios/<nome_usuario>/<nome_profissao>`)
- Uso de templates HTML personalizados
- Suporte para métodos **GET** e **POST**

---

## 🚀 Como Executar o Projeto

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
   http://127.0.0.1:5000/
   ```

---

##  Estrutura de Rotas

| Rota | Método | Descrição |
|------|---------|-----------|
| `/` ou `/index` | GET | Página inicial |
| `/` | GET | Página de  |
| `/login` | GET/POST | Página de login |
| `/usuarios/<nome>/<profissao>` | GET | Página dinâmica com dados de usuário |

---

## 🧩 Tecnologias Utilizadas

- **Python 3**
- **Flask**
- **HTML5 / CSS3**
- **JavaScript**
