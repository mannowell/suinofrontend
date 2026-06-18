# 🐷 SuinoFrontend - Frontend React para Gestão de Granja

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-0.1.0-green.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter)
![Axios](https://img.shields.io/badge/Axios-1.7-5A29E4?logo=axios)
![CRA](https://img.shields.io/badge/CRA-5.0-09D3AC?logo=createreactapp)

Frontend moderno em **React 19** para o sistema de gestão de granja de suínos. Interface SPA (Single Page Application) construída com Create React App, React Router 7 e Axios para comunicação com a API.

---

## 🚀 Funcionalidades

- **Dashboard Interativo** — Visualização em tempo real do estado da granja.
- **Gestão de Pavilhões** — Controle completo de pavilhões e parques.
- **Registro de Rondas** — Formulários para registro diário de condições.
- **Relatórios** — Geração e visualização de relatórios automatizados.
- **Navegação SPA** — Rotas fluidas com React Router 7.
- **Comunicação com API** — Integração via Axios com o backend.

## 🛠️ Tecnologias Utilizadas

| Componente | Tecnologia |
|-----------|-----------|
| **Framework** | React 19 |
| **Roteamento** | React Router DOM 7 |
| **HTTP Client** | Axios |
| **Build Tool** | Create React App 5 |
| **Linguagem** | JavaScript (ES6+) |

## 📦 Instalação e Execução

### Pré-requisitos
- [Node.js](https://nodejs.org/) v16 ou superior

### Passos para Inicialização

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/manowell/suinofrontend.git
   cd suinofrontend
   ```

2. **Instalar dependências**
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento**
   ```bash
   npm start
   ```

Acesse **http://localhost:3000** no seu navegador.

## 📂 Estrutura do Projeto

```
suinofrontend/
├── public/
│   └── index.html         # Template HTML principal
├── src/
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/             # Páginas da aplicação
│   ├── services/          # Configuração do Axios e chamadas API
│   ├── App.js             # Componente raiz e rotas
│   └── index.js           # Ponto de entrada
├── package.json           # Dependências e scripts
└── README.md
```

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`
Executa o app em modo de desenvolvimento em [http://localhost:3000](http://localhost:3000).

### `npm run build`
Compila o app para produção na pasta `build/`.

### `npm test`
Executa os testes em modo interativo.

---

## 👨‍💻 Autor

**Wellison Oliveira (mannowell)**

[![GitHub](https://img.shields.io/badge/GitHub-mannowell-181717?logo=github)](https://github.com/manowell)
[![Upwork](https://img.shields.io/badge/Upwork-Wellison%20Oliveira-6FDA44?logo=upwork)](https://www.upwork.com/freelancers/~01a3c7e5e6e0e0e0)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-000000?logo=vercel)](https://mannowell.dev)

---

## 📄 Licença

Este projeto está sob a licença [MIT](./LICENSE).

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um **fork** do projeto.
2. Crie uma **branch** para sua feature (`git checkout -b feature/minha-feature`).
3. Faça **commit** das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça **push** para a branch (`git push origin feature/minha-feature`).
5. Abra um **Pull Request**.

Por favor, siga as boas práticas de código e mantenha a consistência com o estilo existente.
