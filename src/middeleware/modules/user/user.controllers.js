import { userModel } from "../../../../models/user.model.js";
import bcrypt from "bcrypt";

const signUp =  async(req,res) => {
   const{name, email, password}= req.body
   await userModel.insertMany({name, email, password})
   res.json({message: "succes"});
   const user = await userModel.findOne({email})
   if(user){
    return res.json({
      message: "user already exists",
    })
   }else{
    const hash = bcrypt.hashSync(myPlaintextPassword, salt);
     await userModel.insertMany({name, email, password});
     res.json({message: "succes"});

    }    
  };
  export {signUp}
