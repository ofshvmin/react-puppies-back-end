import { Puppy } from "../models/puppy.js"

async function create(req, res) {
  try {
    const puppy = await Puppy.create(req.body)
    res.json(puppy)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}



export {
  create,
}