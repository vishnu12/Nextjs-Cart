import jwt from 'jsonwebtoken'

function Authenticated(icomponent){
    return (req,res)=>{
        const token = req.headers.authorization
        if(!token){
            return res.status(401).json({error:"No token provided"})
        }
        try{
              const {userId} = jwt.decode(token)
              req.userId=userId
              return icomponent(req,res)
        }catch(err){
            console.log(err)
            return res.status(401).json({error:"you must logged in"})
        }
       
    }
}


export default Authenticated