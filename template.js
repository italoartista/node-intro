const style = `

    <style> 

        body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }

        h1 {
            color: magenta;
        }
        ul { 
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
        }
        li { 
            float: left;
        }
        li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

    </style>

`

const menu = `
<nav> 
<ul>
    <li><a href="/">Principal</a></li>
    <li><a href="/about">Sobre</a></li>
    <li><a href="/contact">Contato</a></li>
</ul>
</nav>
`
const principal = `
    <html>
        <head>
            <title>Template</title>
            ${style}
        </head>
        <body>
            ${menu}
            <h1>Principal</h1>
        </body>
    </html>
`
const sobre = `
    <html>
        <head>
            <title>Template</title>
            ${style}
        </head>
        <body>
        ${menu}
            <h1>Sobre</h1>
            <p>Este é um exemplo de página sobre</p>
        </body>
    </html>
`

const contato = `
<html>
<head>
    <title>Template</title>
    ${style}
</head>
<body>
${menu}
    <h1>Contato</h1>
    <p>Este é um exemplo de página contato</p>
    <form action="/submit" method="post">
        <input type="text" name="nome" placeholder="Nome">
        <input type="email" name="email" placeholder="E-mail">
        <button type="submit">Enviar</button>
    </form>
</body>
</html>

`

const enviado = `
<html>
<head>
    <title>Template</title>
    ${style}
</head>
<body>
${menu}
    <h1>Contato</h1>
    <p>Este é um exemplo de página contato</p>
    <h1>Formulário enviado</h1>
</body>
</html>

`
export { principal, sobre, contato, enviado}