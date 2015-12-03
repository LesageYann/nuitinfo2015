var schema=[];

exports.init=function(connDB){
    var person=new Schema({
        id       : ObjectId,
        name     : String,
        twitter  : String,
        tel      : String,
        facebook : String
    });
    schema['person']= connDB.model('person',person);
}

exports.schemas= schema; 