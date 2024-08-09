const Schema=require("./schema")

const get=async (req,res)=>{
    const data=await Schema.find()
        res.send({
          status: 200,
          message: "Data successfully retrieved",
          data: data,
        });
}
const post=async (req,res)=>{
    try {
    const data= await Schema.create(req.body)
    res.send({
      status:201,
      message:"Data successfully inserted",
      data:data
    })
    } catch (error) {
      console.log("Error Occurred :",error);
      
    }
}

const getByCategory=async (req, res) => {
  const data= await Schema.find({
    category:req.params.category
  })
    res.send({
      status: 200,
      message: "Data successfully retrieved",
      data: data
    });
  }
  const update=async (req,res)=>{
    console.log(req.params.id,req.body);
   const data = await Schema.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
    res.send({
      status:201,
      message:"data successfully updated",
      data:data
      
    })
    
  }
const deleteById=async (req,res)=>{
  const data = await Schema.findByIdAndDelete(req.params.id);
    res.send({
      status:201,
      message:"Data deleted successfully",
  
    })
  }

const getByAccount=(req, res) => {
    res.send({
      status: 200,
      message: "Data successfully retrieved",
      data: sampleData.filter((item) => item.account == req.params.account),
    });
  }

  const getById=(req, res) => {
    res.send({
      status: 200,
      message: "Data successfully retrieved",
      data: sampleData.filter((item) => item.id == req.params.id),
    });
  };
module.exports={
    get,
post,
getByCategory,
update,
deleteById,
getByAccount,
getById
}