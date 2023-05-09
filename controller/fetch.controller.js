
const {Fetchmodel} = require("../model/fetch.model")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const fetchapiroute=async(req,res)=>{
    let  {method,payload,url} = req.body;
    
    console.log(JSON.stringify(payload))
    console.log(req.body)
    try {
      
    // ///GET
    if(method==="GET"){
        const saveFetchedData =new Fetchmodel({userId:req.userId,requestApi:url,method:url})
        await saveFetchedData.save()
  fetch(url,{
   
    headers:{
        "Content-Type":"application/json",
  
    }
  }).then((res)=>res.json()).then((data)=>{
    console.log(data)
    res.status(200).send({msg:data})
  }).catch((err)=>{
    console.log(err)
    res.send(400).send({msg:err.messaage})
  })
  
    }
    ///POST
    else  if(method==="POST"){
      console.log("comming inside post")
      fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
           
        },
        body:JSON.stringify(payload)
      }
      ).then((res)=>res.json()).then((newdata)=>{
        console.log(newdata)
       
      res.status(200).send({msg:newdata})
      }).catch((err)=>{
        console.log(err)
        res.send(400).send({msg:err.messaage})
      })
    //PUT
    }
    //PUT
    else  if(method==="PUT"){
        fetch(url,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
               
            },
            body:JSON.stringify(payload)
          }
          ).then((res)=>res.json()).then((newdata)=>{
            console.log(newdata)
           
          res.status(200).send({msg:newdata})
          }).catch((err)=>{
            console.log(err)
            res.send(400).send({msg:err.messaage})
          })
    
    }
    ///PATCH
    else  if(method==="PATCH"){
        fetch(url,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
               
            },
            body:JSON.stringify(payload)
          }
          ).then((res)=>res.json()).then((newdata)=>{
            console.log(newdata)
           
          res.status(200).send({msg:newdata})
          }).catch((err)=>{
            console.log(err)
            res.send(400).send({msg:err.messaage})
          })
    }
    ///DELETE
    else  if(method==="DELETE"){
      fetch(url,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
          
        }
      }
      ).then((res)=>res.json()).then((newdata)=>{
        console.log(newdata)
       
      res.status(200).send({msg:newdata})
      }).catch((err)=>{
        console.log(err)
        res.send(400).send({msg:err.message})
      })
    
    }
  } catch (error) {
      res.send(400).send({msg:error.messaage})
  }
  
  }



  module.exports=fetchapiroute