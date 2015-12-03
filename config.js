exports.mongod={
    addr : 'mongodb://localhost/nuitinfo',
    bdOptions :{
        db: { native_parser: true },
        server: { poolSize: 10 }
    }
};
exports.port= 3000;