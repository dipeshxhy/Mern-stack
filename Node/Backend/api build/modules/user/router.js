const express=require("express")
const router=express.Router()
const controller=require("./controller")

router.get("",controller.get)
  
router.put("/:id",controller.update)
router.delete("/:id",controller.deleteOne)

router.post("",controller.create)
router.get("/:id",controller.getById)
router.get("/account/:account", controller.getByAccount)
router.get("/balance/greater-than/:balance",controller.greaterBalance)
router.get("/balance/less-than/:balance",controller.lessBalance)
module.exports=router