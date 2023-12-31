# ProjetoCoderHood

<p align="center"> <img width="200px" height="200px" src="Coderhood.jpg"/> </p>
<br id="topo">

<p align="center"> |
    <a href="#objetivo">Objetivo</a> |
    <a href="#cronograma">Cronograma</a> |
    <a href="#integrantes">Integrantes</a> |
    <a href="#requisitos">Requisitos</a> |
    <a href="#fluxos">Fluxos</a> |
    <a href="#backlog">Backlog</a> |

<span id="objetivo"></span>

## Objetivo

* A instituição de ensino PBLTeX, especializada em cursos práticas de ensino aplicando PBL
(Problem Based Learning) costuma trabalhar com ciclos de desenvolvimento. Tais ciclos entregam scores parciais de seus alunos
que são usados no final para computar o chamado FEE (fator de ensino evolutivo). Contudo a
empresa não dispõe atualmente de um SI (sistema de informação) direcionado para a gestão e
acompanhamento dos scores de seus alunos.

  O desafio da CoderHood é apoiar a PBLTeX a levantar, especificar e desenvolver essa solução
<span id="cronograma"></span>

## Cronograma

| Sprint  | Nome | Data inicio  | Data Fim | Status |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| --  | KickOff   | 28/08   | 06/09 |✔️ | 
| <a href="https://github.com/CoderHood-Fatec/ProjetoCoderHood/blob/main/Sprints_docs/Sprint1.md">1</a>  | Sprint 1   | 04/09   | 24/09 |✔️ | 
| <a href="https://github.com/CoderHood-Fatec/ProjetoCoderHood/blob/main/Sprints_docs/Sprint2.md">2</a>  | Sprint 2   | 25/09   | 15/10 |✔️ |
| 3  | Sprint 3   | 16/10   | 05/11 | | 
| 4  | Sprint 4   | 06/11   | 26/11 | | 
| -- | Feira de Soluções  | 12/12  | 12/12 ||




<span id="requisitos"></span>

## Requisitos

### Requisitos Funcionais
* O sistema deve possuir um controle de Turmas
* O sistema deve possuir um controle de Grupos de Alunos
* O sistema deve permitir um controle de Alunos
* O sistema deve permitir a carga de Alunos
* O sistema deve permitir um controle dos Ciclos de Entrega
* O sistema deve permitir a carga de Scores parciais relacionados ao Ciclo de Entrega
* O sistema deve permitir a Configuração de parâmetros globais
* O sistema deve permitir a exportação de dados consolidados, computados e métricas 
inferidas
* O sistema deve prover visibilidades objetivas e diretas que possibilitem o acompanhamento 
dos cursos providos pela PBLTeX

### Requisitos Não Funcionais

* Linguagem de programação Python e tecnologias relacionadas
* Uso de bases de dados simples, dentre as opções abaixo ou similares (alinhar com 
M2)
  * ZODB (https://zodb.org/en/latest/tutorial.html)
  * Arquivo (Text, CSV, JSON ou outros formatos)
  * Observação: Não DEVE ser usado SGBDs SQL e NoSQL no trabalho
* Sistema de controle de versão de código (Git)
* Documentações

<span id="fluxos"></span>

## Backlog


| Ranking de Prioridades | Prioridade | User Stories | Sprint 
| ------------- | ------------- | ------------- | ------------- 
| 1º | Alta |  **Gerenciamento de Turmas:** O professor precisa cadastrar, visualizar e remover as turmas no sistema para que seja possível gerenciamento e acompanhamento dos alunos durante o processo de ensino  | [#2]  | 
| 2º | Alta | **Gerenciamento de Alunos:** O professor precisa cadastrar, visualizar e remover em uma turma já existente no sistema para que possa realizar seu acompanhamento acadêmico | [#2]  |
| 3º | Alta | **Inserir Notas:** O professor precisa inserir as notas pros alunos para avaliá-los após a data final de um ciclo de entregas | [#2]  |
| 5º | Média | **Configuração de Parametros Globais:** Ao enviar uma atividade para os alunos, o professor deve ser capaz de configurar parametros como prazo da atividade para todas as turmas, visando facilitar o processo para ele  | [#3] |
| 6º | Média | **Grupo de Alunos:** O professor precisa dividir a turma em grupos para que posteriormente possa atribuir uma mesma nota para todos os seus integrantes, além de acompanhar a performance por grupo na página de relatórios| [#3] |
| 4º | Alta | **Gerenciamento de Ciclo de Entregas:** O Professor precisa criar atividades  o ciclo de entregas, para isso precisa ser delimitado a data inicial e a data final  | [#3] |
| 8º | Baixa | **Painel de Relatórios:** O professor precisa ter uma visão consolidada com as principais métricas que permitam-o acompanhar a performance de sua turma, grupos e alunos| [#3] |
| 7º | Média | **Importação dos Dados:** O professor precisa extrair relatórios e listas contendo os alunos das turmas ou grupos para poder realizar análises e preparar relatórios para a secretária.| [#4] |
| 9º | Baixa | **Carga de Alunos**: Permitir o professor carregar informações em massa para aumentar sua eficiência de trabalho | [#4] |

## Fluxos

https://www.canva.com/design/DAFvSXf40XE/VEOEoDPBUCqXGEaf54vT8g/edit?utm_content=DAFvSXf40XE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

<span id="backlog"></span>

## Integrantes

Integrante |Ocupação |Github
 -----------|---------|------
Vinícius Augusto da Silva Monteiro |Product Owner|[<img src="https://camo.githubusercontent.com/fbc3df79ffe1a99e482b154b29262ecbb10d6ee4ed22faa82683aa653d72c4e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" />](https://github.com/viniciusFUU)
Rogério Carlos Ribeiro Junior |Scrum Master|[<img src="https://camo.githubusercontent.com/fbc3df79ffe1a99e482b154b29262ecbb10d6ee4ed22faa82683aa653d72c4e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" />](https://github.com/Rogeriowski)
Cesar Augusto Anselmo Pelogia Truyts |Desenvolvedor|[<img src="https://camo.githubusercontent.com/fbc3df79ffe1a99e482b154b29262ecbb10d6ee4ed22faa82683aa653d72c4e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" />](https://github.com/cesarpelogia)
Cesar Augusto de Oliveira |Desenvolvedor|[<img src="https://camo.githubusercontent.com/fbc3df79ffe1a99e482b154b29262ecbb10d6ee4ed22faa82683aa653d72c4e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" />](https://github.com/cesar2099xy)
Juan Henrique Evaristo Cursino |Desenvolvedor|[<img src="https://camo.githubusercontent.com/fbc3df79ffe1a99e482b154b29262ecbb10d6ee4ed22faa82683aa653d72c4e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" />](https://github.com/JuanCursino)
Julio Cesar da Silva Araujo |Desenvolvedor|[<img src="https://camo.githubusercontent.com/fbc3df79ffe1a99e482b154b29262ecbb10d6ee4ed22faa82683aa653d72c4e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" />](https://github.com/JulioAraujo92)
Leonardo Ribeiro Mariano |Desenvolvedor|[<img src="https://camo.githubusercontent.com/fbc3df79ffe1a99e482b154b29262ecbb10d6ee4ed22faa82683aa653d72c4e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" />](https://github.com/LeoRibeiro05)
Rennerson Vasconcelos Afonso |Desenvolvedor|[<img src="https://camo.githubusercontent.com/fbc3df79ffe1a99e482b154b29262ecbb10d6ee4ed22faa82683aa653d72c4e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" />](https://github.com/Rennerson13)

## Tecnologias Utilizadas
### Principais Ferramentas

<div align="Left">
    
  <img src="https://github.com/CoderHood-Fatec/ProjetoCoderHood/assets/142257303/1530fbc9-6922-4d49-b97c-501c84e5d38b" style="margin: 20px; width: 50px; height: 50px;" />
  <img src="https://github.com/CoderHood-Fatec/ProjetoCoderHood/assets/142257303/debf1e95-11f5-44ab-b919-9a563dd69ce3" style="margin: 20px; width: 100px; height: 100px;" />
  <img src="https://github.com/CoderHood-Fatec/ProjetoCoderHood/assets/142257303/0e29ad8f-1e17-4fa3-859b-a571dcf6f038" style="margin: 20px; width: 50px; height: 50px;" />
  <img src="https://github.com/CoderHood-Fatec/ProjetoCoderHood/assets/142257303/ffa82c19-6c57-4c0a-bc1f-61c6e5a23865" style="margin: 20px; width: 50px; height: 50px;" />
  <img src="https://github.com/CoderHood-Fatec/ProjetoCoderHood/assets/142257303/f20f107a-59e6-4cbd-b91e-11157452722b" style="margin: 20px; width: 50px; height: 50px;" />
    <img src="https://github.com/CoderHood-Fatec/ProjetoCoderHood/assets/142257303/a7b03fdc-424b-4350-a2b4-f6712bd6b8dc" style="margin: 20px; width: 60px; height: 60px;" />
    
</div>

### Ferramentas secundárias

<div align="Left">
    
  <img src="https://github.com/CoderHood-Fatec/ProjetoCoderHood/assets/142257303/64bcacc5-7180-4467-af93-4ece29788a50" style="margin: 20px; width: 50px; height: 50px;" />
  <img src="https://github.com/CoderHood-Fatec/ProjetoCoderHood/assets/142257303/5a7d9f2a-8c71-4a65-9b6c-c8037925f3c6" style="margin: 20px; width: 50px; height: 50px;" />
  <img src="https://github.com/CoderHood-Fatec/ProjetoCoderHood/assets/142257303/01324c3e-137d-4dc1-9c1f-322354594786" style="margin: 20px; width: 50px; height: 50px;" />

</div>

