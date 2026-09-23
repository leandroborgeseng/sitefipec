# FIPEC — evolução da presença institucional

Pesquisa e implementação: 23/09/2026.

## Direção

A versão inicial apresentava as áreas, mas não deixava evidente o principal diferencial informado pela FIPEC: todos os membros são professores do Uni-FACEF, com sólida formação acadêmica em mestrado e doutorado. A nova versão coloca esse fato na abertura e desenvolve sua relevância para o visitante.

Formulação institucional: “Todos os membros da FIPEC são professores do Uni-FACEF. Uma equipe de mestres e doutores, com sólida formação acadêmica e diferentes especialidades.” Não atribui a todos os indivíduos simultaneamente ambos os títulos, nem inventa nomes, currículos ou áreas de titulação. O indicador de 100% refere-se exclusivamente ao vínculo docente informado por Leandro Borges.

## Referências pesquisadas

São referências de fundações de apoio e de instituições de origem acadêmica. Seus vínculos e naturezas jurídicas são diferentes; não se presume que tenham o mesmo enquadramento da FIPEC.

| Referência | Evidência no site oficial | Aplicação à FIPEC |
| --- | --- | --- |
| Fundação Vanzolini, criada por professores da Poli-USP | Origem acadêmica, unidades de atuação e soluções para organizações | Credibilidade acadêmica já na abertura e oferta organizada por necessidades |
| FIA | Corpo docente apresentado por formação e especialidades; educação para organizações | Seção dedicada à equipe e caminhos de formação para profissionais e organizações |
| FUSP, de apoio à USP | Transparência e perguntas frequentes sobre projetos | FAQ útil agora; documentos próprios quando fornecidos |
| Fundunesp | Governança, documentos, certificações verificáveis e parceiros | Priorizar evidências verificáveis; nunca importar certificados ou clientes para a FIPEC |
| Fundep, em conexão com a UFMG e instituições apoiadas | Portfólio de projetos com contexto | Modelo para futuros casos reais: desafio, atuação, entregas e resultados |

Fontes:
- https://vanzolini.org.br/institucional/
- https://conteudo.vanzolini.org.br/organizacoes/
- https://fia.com.br/corpo-docente/
- https://fia.com.br/in-company/
- https://www.fusp.org.br/transparencia
- https://fusp.org.br/perguntas-frequentes
- https://www.fundunesp.org.br/
- https://www.fundunesp.org.br/sobre/quem-somos
- https://www.fundep.ufmg.br/projetos

## Implementado

1. Abertura em azul profundo, com tipografia de maior presença e foco na formação da equipe.
2. Identidade FIPEC preservada, incluindo imagens originais do logotipo e símbolo.
3. Áreas de atuação em um explorador de cinco abas, com descrição, temas e pergunta orientadora.
4. Navegação por teclado nas abas (setas, Home, End), foco visível e títulos acessíveis.
5. Seção de professores com explicação dos diferenciais, sem biografias fictícias.
6. Formação organizada para profissionais e para organizações.
7. Roteiro para iniciar contato; não é uma promessa de metodologia contratual já formalizada.
8. Perguntas frequentes com elementos nativos de expansão.
9. Contato telefônico e botão de copiar com alternativa quando a área de transferência não está disponível.
10. Navegação móvel, fechamento por Escape e ao clicar fora, links de seção e indicação da seção em leitura.
11. Metadados de título e descrição para buscadores e compartilhamento, sem imagem de compartilhamento inventada.
12. Respeito à preferência de redução de movimento. Sem carrossel automático ou conteúdo essencial oculto por animações.

## O que depende de informações adicionais

### Prioridade 1 — prova de competência
- Nomes, fotos autorizadas, titulação individual, áreas e links do Lattes dos professores.
- Três a cinco projetos reais: cliente (com autorização), desafio, atuação, entregas e resultados documentados.
- Escopo exato de engenharia civil e TI. Não anunciar laudos, fiscalização, certificações ou desenvolvimento de sistemas por inferência.
- Validar telefone, endereço e responsável pelo atendimento.

### Prioridade 2 — informação institucional
- Estatuto, composição dos órgãos, relatórios e documentos cuja publicação esteja autorizada.
- Definição institucional aprovada sobre o vínculo FIPEC–Uni-FACEF.
- Dados de cursos: responsáveis, ementa, carga horária, formato, datas, investimento e inscrições.
- Política de privacidade adequada aos recursos efetivamente implantados. O site não recebe formulários nem armazena leads; o Google Fonts faz requisições externas.

### Prioridade 3 — aprofundamento
- Páginas próprias de serviços com entregáveis reais, projetos relacionados e especialistas.
- Fotografias reais da equipe e das atividades, com autorização de uso. Não usar fotos genéricas como se fossem da FIPEC.
- Sistema editorial para cursos, projetos e documentos quando a rotina de atualização estiver definida.
- Formulário conectado a um canal real, após confirmar destinatário, tratamento dos dados e responsável pelo retorno.

## Critério de qualidade

Design e interação ajudam a apresentar a instituição. A força da versão seguinte dependerá de evidências reais: pessoas identificadas, trabalhos documentados, ofertas claras e informação institucional atualizada. A versão atual não declara conformidade integral com WCAG, certificações, prêmios, liderança de mercado ou resultados sem validação.

## Publicação

Código para Railway no repositório `leandroborgeseng/sitefipec`. A prévia privada de Sites foi mantida como ponto de visualização da nova versão, a pedido do usuário. O código de continuidade está no GitHub/Railway; a publicação no Railway depende da integração configurada pelo proprietário.

## Verificação desta entrega

Sintaxe JavaScript, referências locais, IDs, links internos, relações ARIA e respostas HTTP foram verificados. A captura e os testes em navegador não puderam ser concluídos: não há navegador instalado e o download do Chromium retornou um arquivo inválido. O layout usa regras responsivas, mas a inspeção visual em desktop e celular permanece pendente.
