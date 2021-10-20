//module database mongodb
const Person = require('../database/person');

class Main{
    // GET: /edit/:id
    edit(req,res){
        Person.findById(req.params.id,(err,data)=>{
            if(err) res.send(err);
            else res.send(data);
        })
    }
    // POST: /add
    post(req, res, next){
        let p = new Person(req.body);
        p.save()
          .then(data=>res.send("Add success !"))
          .catch(next);
    }
    //POST: /update/:id
    update(req, res, next){
        Person.updateOne({_id:req.params.id},req.body)
          .then((data)=>res.send("Update success !"))
          .catch(next);
    }
}

module.exports = new Main;
