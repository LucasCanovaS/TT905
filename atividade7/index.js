const express = require("express");
const app = express();
app.use(express.json());

// Permissões
var cors = require('cors');
app.use(cors());

// Porta que eu estou ouvindo
app.listen(process.env.PORT || 3000);

app.get('/', 
    function (req, res){    
        res.send("Servidor Aberto");
    }
);

app.get('/hello',
function (req, res){    
    res.send("Servidor Aberto 2");
    }
)

const conteudo = [
    {nome: "Lucas Tadeu",  ra: 220951 , tipo: "Filme" , conteudo: "Star Wars"},        // Coloca aqui no seu nome Livro e Filmes
    {nome: "Lucas Canova", ra: 172621 , tipo: "Filme" , conteudo:    "-"},              // Preencher os - com o conteudo seu!
    {nome: "Lucas Tadeu",  ra: 220951 , tipo: "Livro" , conteudo: "Arte da Guerra"},     // o tipo define (Livro ou Filme) e (Conteudo o nome do tipo) 
    {nome: "Lucas Canova", ra: 172621 , tipo: "Filme" , conteudo:    "-"},
    {nome: "Lucas Tadeu",  ra: 220951 , tipo: "Filme" , conteudo: "Star Trek"},
    {nome: "Lucas Tadeu",  ra: 220951 , tipo: "Livro" , conteudo: "Senhor dos Aneis"},
    {nome: "Lucas Canova", ra: 172621 , tipo: "Filme" , conteudo:    "-"},
    {nome: "Lucas Canova", ra: 172621 , tipo: "Filme" , conteudo:    "-"},
];

app.get('/conteudo',
    function(req, res){
        res.send(conteudo.filter(Boolean)); // Usa para retirar os Null
    }
);

app.get('/conteudo/:id',
    function(req, res){
        const id = req.params.id - 1;
        const mensagem = conteudo[id];

        if (!mensagem){
            res.send("RA Nao Encontrado");
        } else {
            res.send(mensagem);
        }
    }
)

app.post('/conteudo', 
    (req, res) => {
        console.log(req.body.mensagem);
        const mensagem = req.body.mensagem;
        conteudo.push(mensagem);
        res.send("Criar RA.")
    }
);

app.put('/conteudo/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const mensagem = req.body.mensagem;
        conteudo[id] = mensagem;        
        res.send("RA atualizado com sucesso")
    }
);

app.delete('/conteudo/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete conteudo[id];

        res.send("RA removido com sucesso");
    }
);