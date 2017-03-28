var express=require('express')
var port=process.env.PORT || 3000
var path=require('path')
var app=express()
app.listen(port)
console.log("server is running at port"+port);
app.set('views','./views/pages')
// app.set('views',path.join(__dirname,'views/pages'))
app.set('view engine','jade')
app.get('/',function(req,res){
  res.render('head',{
    tittle:'imooc'
  })
})
