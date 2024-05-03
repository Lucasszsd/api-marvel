# api-marvel

# secret wars

# http://gateway.marvel.com/v1/public/events/270?ts=1&apikey=34efc23fc561a1a203cf581cec43daf0&hash=c7d2edd3395941ec22157a6e0f577d40

endpoints :

/inserir-personagens
realiza a busca de personagens da saga na api e popula o banco local com as informações dos personagens
/inserir-quadrinhos
busca os quadrinhos da saga e popula no banco
/inserir-criadores
busca os criadores dos quadrinhos da saga e popula o banco
/quadrinhocriador/:id
quadrinhos do criador
/imagempersonagem/:id
imagem tratada para abrir diretamente no navegador (personagem)
/capaquadrinho/:id
imagem tratada para abrir diretamente no navegador (capa do quadrinho)
/datalancamentoquadrinho/:id
data de lançamento de determinado quadrinho
/deletaPersonagemIndesejado/:nome
deleta um personagem pelo
