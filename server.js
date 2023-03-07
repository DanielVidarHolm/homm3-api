const express = require("express")
const app = express()
const PORT = 8003
const homm3JsonFile = require('./homm3.json')

app.get('/', (request, response)=>{
    response.sendFile(__dirname + ('/index.html'))
})

app.get('/api', (request, response) => {
    response.json(homm3JsonFile)
})
app.get('/api/:pRoot', (request, response) => {
    const pRoot = request.params.pRoot
    response.json(homm3JsonFile[pRoot])
})
app.get('/api/:pRoot/:pSubRoot', (request, response) => {
    const pRoot = request.params.pRoot
    const pSubRoot = request.params.pSubRoot
    response.json(homm3JsonFile[pRoot][pSubRoot])
})
app.get('/api/:pRoot/:pSubRoot/:pSub2Root/', (request,response) => {
    const pRoot = request.params.pRoot
    const pSubRoot = request.params.pSubRoot
    const pSub2Root = request.params.pSub2Root
    
   
    if (pSubRoot === 'path'){
        response.redirect(homm3JsonFile[pRoot][pSubRoot][pSub2Root])
    }else{
        response.json(homm3JsonFile[pRoot][pSubRoot][pSub2Root])
    }
})

app.get('/api/:pRoot/:pSubRoot/:pSub2Root/:pSub3Root', (request,response) => {
    const pRoot = request.params.pRoot
    const pSubRoot = request.params.pSubRoot
    const pSub2Root = request.params.pSub2Root
    const pSub3Root = request.params.pSub3Root
    
    
    if (pSub3Root === 'path'){
        response.redirect(homm3JsonFile[pRoot][pSubRoot][pSub2Root][pSub3Root])
    }else{
        response.json(homm3JsonFile[pRoot][pSubRoot][pSub2Root][pSub3Root])
    }
})
app.get('/api/:pRoot/:pSubRoot/:pSub2Root/:pSub3Root/:pSub4Root', (request,response) => {
    const pRoot = request.params.pRoot
    const pSubRoot = request.params.pSubRoot
    const pSub2Root = request.params.pSub2Root
    const pSub3Root = request.params.pSub3Root
    const pSub4Root = request.params.pSub4Root
    
    console.log(pSub4Root)
    if (pSub4Root === 'path'){
        console.log('Hello')
        response.redirect(homm3JsonFile[pRoot][pSubRoot][pSub2Root][pSub3Root][pSub4Root])
    }else{
        response.json(homm3JsonFile[pRoot][pSubRoot][pSub2Root][pSub3Root][pSub4Root])
    }
})
app.get('/api/:pRoot/:pSubRoot/:pSub2Root/:pSub3Root/:pSub4Root/:pSub5Root', (request,response) => {
    const pRoot = request.params.pRoot
    const pSubRoot = request.params.pSubRoot
    const pSub2Root = request.params.pSub2Root
    const pSub3Root = request.params.pSub3Root
    const pSub4Root = request.params.pSub4Root
    const pSub5Root = request.params.pSub5Root
    
    console.log(pSub5Root)
    if (pSub5Root === 'path'){
        
        response.redirect(homm3JsonFile[pRoot][pSubRoot][pSub2Root][pSub3Root][pSub4Root][pSub5Root])
    }else{
        response.json(homm3JsonFile[pRoot][pSubRoot][pSub2Root][pSub3Root][pSub4Root][pSub5Root])
    }
})
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
