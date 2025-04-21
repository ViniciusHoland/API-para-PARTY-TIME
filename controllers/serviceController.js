import  ServiceModule  from '../models/Service.js'


const { Service } = ServiceModule

const serviceController = {

    create: async(req, res) => {
        try{

            const service= {
                name : req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            }


            const response = await Service.create(service)

            res.status(201).json({response, msg: "Servico criado com sucessp"})


        } catch (error){
            console.log(error)
        }
    }


}


export default serviceController