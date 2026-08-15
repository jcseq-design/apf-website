# APF — Website revisto

Estrutura:
- index.html — Home
- sobre.html — Sobre a APF
- fazemos.html — O Que Fazemos
- associe-se.html — Adesão + formulário
- noticias-eventos.html — Notícias, eventos e calendário
- contactos.html — Contactos + formulário
- css/style.css — sistema visual
- js/main.js — lógica dos formulários

Integração Google Sheets:
1. Criar uma Google Sheet.
2. Criar um Google Apps Script que receba os dados do formulário e escreva uma nova linha na Sheet.
3. Publicar o Apps Script como Web App.
4. Colocar o URL do Web App na variável GOOGLE_SHEETS_ENDPOINT em js/main.js.
5. Testar o envio antes de publicar.

Nota: o URL da Google Sheet não deve ser colocado diretamente no formulário. O endpoint deve ser uma camada intermédia, como Google Apps Script.

Conteúdo:
A arquitetura foi revista com base na proposta da APF, mas a estrutura editorial do HTML foi mantida mais dinâmica. Datas e valores que a proposta deixa como futuros ou "a definir" continuam assinalados como tal.
