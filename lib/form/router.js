exports.init=function(app,schema){
    
    app.post('/life',function (req, res, next){
        CommentaireArticleModel.findOne(req.body, function (err, user) {
            if (err) { res.sendStatus(412); }
            // comms est un tableau de hash
            console.log(user);
            res.json(user);
        });
    });
    
    app.post('/asklife.json',function (req, res, next){
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
