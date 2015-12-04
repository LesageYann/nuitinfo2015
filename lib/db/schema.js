var schema=[];

exports.init=function(connDB, Schema){
    var person=new Schema({
        name     : String,
        twitter  : String,
        tel      : String,
        facebook : String,
        alive    : String,
        prevent  : [String]
    });
    schema['person']= connDB.model('person',person);
}

exports.schemas= schema; 