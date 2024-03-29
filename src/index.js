const express=require('express');
const path=require('path');
const nodemailer=require('nodemailer');
const morgan=require('morgan');
const engine=require('ejs');
const app=express();

app.set('puerto', process.env.PORT || 8000);
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');

app.use(morgan('dev')); 
app.use(express.urlencoded({extended: false}));

app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname,'public')));

const server=app.listen(app.get('puerto'),()=>{
	console.log('servidor ejecutandose en el puerto',app.get('puerto'));
});

