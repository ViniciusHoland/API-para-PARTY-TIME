import { response } from "express"
import { Party } from "../models/Party.js"


const checkPartyBudget = (budget, services) => {

    // vai entregar a soma de todos os valores dos services e atribuir no PRICESUM 
    const priceSum = services.reduce((sum, service) => sum + service.price, 0)

    if(priceSum > budget){
        return false
    }

    return true

}

const partyController = {

    create: async (req, res) => {

        try {

            const {title, author, description, budget, image, services} = req.body

            const party = {
                title,
                author,
                description,
                budget,
                image,
                services
            }


            if(services && !checkPartyBudget(party.budget, party.services)){
                res.status(406).json({msg: "o seu orcamento é insuficiente"})
                return
            }

            const response = await Party.create(party)

            res.status(201).json({msg: "Party criado com sucesso", response})
        } catch (error) {
            console.log("erro ao criar party", error)
        }


    }



}

export default partyController