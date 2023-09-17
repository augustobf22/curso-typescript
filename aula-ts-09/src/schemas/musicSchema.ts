import Joi from "joi"
import { Music } from "../protocols/index"

const schemaMusic = Joi.object<Music>({
    title: string().required(),
    artist: string().required()
})

export default schemaMusic;