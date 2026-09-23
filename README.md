# FIPEC — Site institucional

Primeira versão para avaliação. HTML, CSS e JavaScript, com servidor Node.js sem dependências externas.

## Rodar localmente

Requer Node.js 22 ou superior. Execute `npm start` e abra http://localhost:3000.
Use `npm run check` para verificar a sintaxe.

## Publicar no Railway

1. Envie os arquivos deste projeto à raiz de um repositório no GitHub.
2. No Railway, crie um projeto com **Deploy from GitHub repo** e selecione o repositório.
3. Selecione a branch `main`, com a raiz do repositório como diretório de trabalho.
4. O Railway detecta o Dockerfile. Não há instalação de pacotes, banco de dados ou segredos necessários.
5. Depois do deploy, em **Settings → Networking → Public Networking**, use **Generate Domain**.

O servidor escuta em `0.0.0.0` e usa `PORT`, definida pelo Railway. O endpoint `/health` é usado para verificação de disponibilidade.
O endereço gerado é público e poderá ser enviado para aprovação. A autenticação da prévia do ChatGPT não acompanha esta exportação.

## Editar e revisar

- `public/index.html`: textos, seções e dados de contato.
- `public/style.css`: cores, tipografia e layout responsivo.
- `public/script.js`: menu e detalhes dos serviços.
- `public/fipec-logo.png`: logotipo completo.
- `public/fipec-symbol.png`: símbolo e favicon.

Faça alterações em uma branch e use pull requests para revisão, se desejado. Commits na branch conectada ao Railway geram novos deploys quando o deploy automático está habilitado.
As fontes são carregadas do Google Fonts; há fontes locais de fallback.

## Pendências editoriais

Confirmar telefone, endereço, descrição institucional e escopo dos serviços, especialmente engenharia civil. Não há formulário de envio ou catálogo de turmas: o contato é telefônico e a programação deve ser consultada com a equipe. O conteúdo inicial não apresenta números de impacto, clientes ou certificações não confirmados.

## Referências de publicação

https://docs.railway.com/services
https://docs.railway.com/guides/dockerfiles
https://docs.railway.com/guides/public-networking
