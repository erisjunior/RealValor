## Analisador de Rendimentos

### Sistema web para analisar investimentos em Bitcoin e Tesouro Direto Fixado

Proposta de projeto onde podemos fazer a análise de investimentos em reais, em tesouro direto fixado (10% ao ano) e sua diferença com investimento em Bitcoin (dados relativos à API [XXX](https://)).

Nesta solução, somos capazes de entrar com a quantidade de valor investido e há quantos anos foi investido, assim, tendo resultado gráfico da diferença entre Tesouro Direto e Bitcoin, além de alguns detalhamentos do investimento.

O sistema foi feito em ReactJs, focando numa arquitetura completa e prática, que permitiria o avanço do projeto, caso necessário.

Arquitetura base:

- components/ - Componentes utilizados ao longo do sistema, com suas renderizações e controles separados da página onde foram utilizados.
- config/ - Configurações padrões do projeto, neste caso, apenas a utilização da ferramenta Reactotron.
- helpers/ - Funções auxiliares para a formatação e adapatações dos dados na aplicação.
- pages/ - Páginas propriamente ditas do sistema.
- routes/ - Definição de rotas do sistema.
- services/ - Serviços utilizados, tanto a api de consulta de bitcoin, quanto o serviço de navegação de rotas caso necessário.
- store/ - Estruturação da arquitetura flux, com Redux, utilizando o DuckPattern com auxilio do Redux-Sauce e Redux Saga.
- styles/ - Definição de estilos globais.

Busquei seguir bons padrões de código e divisão clara das atribuições dentro do projeto, e a separação explicita de cada componente, suas funcionalidades, regras e estilos.
