import { Request, Response, NexFunction} from "express";
import {ObjectSchema} from "joi"

export function validateSchema(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NexFunction) => {
        const validation = schema.validate(req.body);
        if (validation.error) {
            return res.status(422).send({error: validation.error.message})
        }
    }
}