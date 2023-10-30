import joi from "joi"
import joiDate from "@joi/date"

const joiWithDate = joi.extend(joiDate);

export const flightSchema = joi.object( {
    origin: joi.number().required(),
    destination: joi.number().required(),
    date: joiWithDate.date().format("DD-MM-YYYY").required()
})