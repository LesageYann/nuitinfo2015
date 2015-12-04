//mail
var transporter;


exports.init=function(app,schema, transport){
    transporter=transport;
    app.post('/alive',function (req, res, next){
        CommentaireArticleModel.findOne(req.body, function (err, user) {
            if (err) { res.sendStatus(412); }
            // comms est un tableau de hash
            console.log(user);
            res.json(user);
        });
    });
//    exports.prevent('test','test', 'yannlesag@gmail.com');
    app.post('/dead',function (req, res, next){
        CommentaireArticleModel.findOne(req.body, function (err, comms) {
            if (err) { res.sendStatus(412); }
            // comms est un tableau de hash
            console.log(comms);
            var instance =new schema.person(req.body);
            instance.save(function(err){
                if(err){
                    res.sendStatus(418);
                }else{
                    res.json({msg:""});
                }
            });
        });
        
    });
}

exports.isAlive= function(person){
  var title = person.name + ' est vivant';
  var content = "Bonjour, Nous avons le plaisir de vous que "+person.name+" est vivant !";
  for( var ind in person.toprevent){
      exports.prevent( title, content, person.toprevent[ind]);
  }
};

exports.prevent=function( title, content, mail){
    transporter.sendMail({
        from: 'Doa app',
        to: mail,
        subject: title,
        html: content
    });
};