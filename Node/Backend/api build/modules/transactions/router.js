
const express=require("express")
const router=express.Router()
const controller=require("./controller")

 router.get("",controller.get)


  router.post("",controller.post)
  
  //>data by category
  router.get("/category/:category",controller.getByCategory );
  
  router.put("/:id",controller.update)
  router.delete("/:id",controller.deleteById)
  
  
  //=>by account
  router.get("/account/:account", controller.getByAccount);
  
  //-> data by id
  router.get("/:id", controller.getById)
  
  // greater than 20000
  router.get("/amount/greater-than-20000", (req, res) => {
    const amount = Number(req.params.amount);
    const filteredData = sampleData.filter((item) => item.amount > 20000);
  
    res.send({
      status: 200,
      message: "Data successfully retrieved",
      data: filteredData,
    });
  });
  
  //less than 20000
  router.get("/amount/less-than-20000", (req, res) => {
    const amount = Number(req.params.amount);
    const filteredData = sampleData.filter((item) => item.amount < 20000);
  
    res.send({
      status: 200,
      message: "Data successfully retrieved",
      data: filteredData,
    });
  });
  
  //by type
  router.get("/type/:type", (req, res) => {
    const filteredData = sampleData.filter(
      (item) => item.type == req.params.type
    );
  
    res.send({
      status: 200,
      message: "Data successfully retrieved",
      data: filteredData,
    });
  });

  module.exports=router
  