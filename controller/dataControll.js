const Person = require('../database/person');

class Data{
    // GET: /data
    index(req, res, next){
        Person.find({}).lean()
        .then(data => res.send(data))
        .catch(next)
    }
    //GET: /delete/:id
    delete(req, res, next){
        Person.deleteOne({_id: req.params.id},(err)=>{
            if(err) res.send(err);
            else res.send("Delete Success !");
        })
    }
    //DELETE: /deleteall
    deleteAll(req,res,next){
        Person.deleteMany({},(err,person)=>{
            if(err) res.send(err);
            else res.send("Success !");
        });
    }
}

module.exports = new Data;