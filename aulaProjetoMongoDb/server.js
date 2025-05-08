const { createApp } = require('./app.js');
const PORT = process.env.PORT || 3000;
createApp()
.then(app => app.listen(PORT,()=>{
    console.log(`serviço rodando `);
}))
.catch(err => {
    console.error('Falha ao inciar app');
})