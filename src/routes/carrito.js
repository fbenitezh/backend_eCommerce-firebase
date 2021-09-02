const {Router} = require('express');

const router = new Router();

router.post('/',(req,res)=>{
    res.send('ok carrito');
})

router.delete('/:id',(req,res)=>{
    res.send('ok carrito');
});

router.get('/:id/productos',(req,res)=>{
    res.send('ok carrito');
});

router.post('/:id/productos',(req,res)=>{
    res.send('ok carrito');
})

router.delete('/:id/productos/:id_prod',(req,res)=>{
    res.send('ok carrito');
})

module.exports = router;