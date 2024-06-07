## Regras para codar no projeto:

    -> HTML:
        - usar as tags com mais semántica possível, sendo elas <header> para cabeçalho, 
            <footer> para o footer e etc..
        - não colocar estilo inline para CSS, fazer todo o css no seu devido arquivo
        - usar classe para CSS e ID para o Javascript, sendo o id em camelCase e a 
            classe separada com hífen (exemplo-de-nome)
        - não utilizar scripts dentro do html, deixar separado na pasta Scripts
        - nomear o arquivo HTML com a primeira letra maiúscula e sendo referente a tela
            que está sendo desenvolvida no arquivo. (Login.html ou Home.html), sempre sendo em inglês

    -> CSS:
        - não aplicar estilo para tags específicas, salvos alguns casos. Utilizar sempre classes
        - colocar key-frames e animações no topo do arquivo
        - ao mexer com estilos de um filho, colocar seu estilo dentro do estilo do elemento pai
        - não utilizar cores que fogem do protótipo, usar apenas as que estão lá, mais o branco e o preto
        - criar um CSS para cada arquivo HTML, com o mesmo nome do arquivo HTML

    -> Javascript:
        - utilizar camelCase para variáveis, funções e todas as nomenclaturas do arquivo
        - utilizar const para todas as variáveis imutáveis, e let para as mutáveis
        - não ficar mudando o valor de variáveis para formatação ou equação. Utilizar funções que 
            recebem como base a variável não formatada/resolvida, e retorna o valor já formatado/resolvido
    
    -> Estrutura:
        - criar pastas dentro da pasta Pages, sendo o nome da página a ser feita, 
            dentro dela deve conter um arquivo HTML e outro CSS
        - nomes das classes, funções, variáveis, id´s, sempre em inglês
        - avalie outros códigos antes de fazer o seu, para ver e tentar manter um 
            padrão alinhado com os outros devs do time
        - criar a pasta Images na raiz contendo as imagens separadas pelo nome da 
            imagem + _ + onde e usado (ex: logo_login) 
    
    -> Github:
        - o nome do commit deve se basear na alteração:
            - new: para nova tela
            - bug: para corrigir algum bug
            - feat: adicionar conteudo em algo já existente
            exemplos: new: página de Login
                      feat: adicionar filtro de marca na Home
                      bug: login não cadastra no localStorage
            - todos as altrações no código devem passar pelo líder do time, no caso eu (Rodrigo)
