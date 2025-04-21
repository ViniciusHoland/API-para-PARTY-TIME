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

            res.status(201).json({response, msg: "Servico criado com sucesso"})


        } catch (error){
            console.log(error)
        }
    },

    getAllServices: async (req,res) => {
        try{

            const response = await Service.find()

            res.status(200).json({msg: "successo ao buscar todos servicos", response})


        } catch (error) {
            console.log("erro ao buscar todos os servicos", error)
        }
    },
    
    getServiceById: async(req,res) => {


        try{

            const serviceId = req.params.idService

            const service = await Service.findById(serviceId)

            if(!service){
                res.status(404).json({msg: "servico nao encontrado"})
                return
            }

            res.status(200).json({msg: "sucesso ao buscar servico do usuario", service})

        } catch (error) {
            console.log("erro ao buscar servico")
        }


    },

    deleteService: async(req,res) => {


        try{

            const serviceId = req.params.idService

            const service = await Service.findById(serviceId)

            if(!service){
                res.status(404).json({msg: "servico nao encontrado"})
                return
            }

            await Service.deleteOne(service)

            res.status(200).json({msg: "servico deletado com sucesso", service})

        } catch (error) {
            console.log("erro ao deletar servico")
        }


    }


}


export default serviceController