const {Router} = require('express');

const router = new Router();

router.get('/:id?',(req,res)=>{
    res.send('ok productos');
});

router.post('/',(req,res)=>{
    res.send('ok productos');
})

router.put('/:id',(req,res)=>{
    res.send('ok productos');
});

router.delete('/:id',(req,res)=>{
    res.send('ok productos');
})

module.exports = router;