const { getByAccount } = require("../transactions/controller");

const usersData=[
    {
      id:1,
      name:"Dipesh",
      address:"Lalitpur",
      email:"dipesh@gmail.com",
      category:"full stack developer",
      account:"esewa",
      balance:100000,
  
    },
    {
      id:2,
      name:"Sanjay",
      address:"Lalitpur",
      email:"sanjay@gmail.com",
      category:"fronted developer",
      account:"esewa",
      balance:50000,
  
    },
    {
      id:3,
      name:"Kritika",
      address:"ktm",
      email:"kriti@gmail.com",
      category:"full stack developer",
      account:"global",
      balance:100000,
  
    },
    {
      id:4,
      name:"Mira",
      address:"Lalitpur",
      email:"mira@gmail.com",
      category:"backend developer",
      account:"khalti",
      balance:120000,
  
    },
    {
      id:5,
      name:"Harsh",
      address:"Biratnagar",
      email:"harsu@gmail.com",
      category:"fronted developer",
      account:"khati",
      balance:150000,
  
    },
    {
      id:6,
      name:"Sudip",
      address:"Lalitpur",
      email:"dsudi@gmail.com",
      category:"full stack developer",
      account:"esewa",
      balance:65000,
  
    },
    {
      id:7,
      name:"Sarthak",
      address:"Banglore",
      email:"sarthak@gmail.com",
      category:"full stack developer",
      account:"global",
      balance:700000,
  
    },
    {
      id:8,
      name:"Suhana",
      address:"ktm",
      email:"suhana1@gmail.com",
      category:"backend developer",
      account:"khalti",
      balance:90000,
  
    },
    {
      id:9,
      name:"Rakesh",
      address:"Imadol",
      email:"rakesh@gmail.com",
      category:"fronteddeveloper",
      account:"nimb",
      balance:110000,
  
    },
    {
      id:10,
      name:"Sirji",
      address:"ktm",
      email:"jisir@gmail.com",
      category:"full stack developer",
      account:"esewa",
      balance:130000,
  
    },
  ]
const get=(req,res)=>{
    res.send({
        status:200,
        message:"Data is successfully retrieved",
        data:usersData
    })
}
const update=(req,res)=>{
    console.log(req.params.id,req.body);
    const index = usersData.findIndex((item) => item.id == req.params.id);
    
    res.send({
  status:201,
      message:"Data successfully updated",
      data:usersData[index] = {
        ...req.body }
    })
    
  }

  const deleteOne=(req,res)=>{
    res.send({
      status:201,
      message:"Data successfully deleted",
      data:usersData.filter((item)=>item.id!=req.params.id),
    })
  }
  const create=(req,res)=>{
    console.log(req.body)
    usersData.push(req.body)
    res.send({
      status:201,
      message:"Data successfully inserted",
      data:req.body,
    })
  }
  const getById=(req,res)=>{
    const id =req.params.id
    const user=usersData.filter((item)=>item.id==id)
    res.send({
      status:200,
      message:"Data successfully retrieved",
      data:user,
    })
    }
    const getByaccount=(req,res)=>{
      const account=req.params.account
      const user=usersData.filter((item)=>item.account==account)
      res.send({
        status:200,
        message:"Data successfully retrieved",
        data:user,
      })
    }
    const greaterBalance=(req,res)=>{
      const balance=Number(req.params.balance)
      const user=usersData.filter((item)=>item.balance>balance)
      res.send({
        status:200,
        message:"Data successfully retrieved",
        data:user,
      })
    }
    const lessBalance=(req,res)=>{
      const balance=Number(req.params.balance)
      const user=usersData.filter((item)=>item.balance<balance)
      res.send({
        status:200,
        message:"Data successfully retrieved",
        data:user,
      })
    }
module.exports={
    get,
   update,
    deleteOne,
    create,
    getById,
    getByAccount,
    greaterBalance,
    lessBalance
 
}