export default function handle(req,res){
    res.status(200).send({id: req.query.id})
}