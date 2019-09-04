const router=require('express').Router();

router.get('/',(req,res,next)=>{
	res.render('index');
});
router.post('/',(req,res,next)=>{
	console.log(req.body);
	res.send('recivido');
});

module.exports=router;
