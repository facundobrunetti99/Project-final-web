import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { username, password } = req.body;

  const pwhash = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({
      username,
      password: pwhash,
    });
    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id });
    res.cookie("token", token);

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      createdAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};
export const login = async (req, res) => {
  const {username, password } = req.body;
  try {
      const userFound =await User.findOne({username})

    if(!userFound)return res.status(400).json({message:"User not found"})
    const isMatch= await bcrypt.compare(password, userFound.password)

    if(!isMatch)return res.status(400).json({message:"Invalida cirdencial"})

    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      createdAt: userFound.createdAt,
      updateAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({message: error.message})
  }

};

export const logout= (req,res)=>{
  res.cookie('token',"",{
  expires: new Date(0)
  })
  return res.sendStatus(200);
}

export const profile =(req,res)=>{
  res.send('profile');
}