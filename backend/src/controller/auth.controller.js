import User from "../model/user.model.js";

export const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({
      username,
      password,
    });
   const userSaved = await newUser.save();
   res.json(userSaved)
  } catch (error) {
    console.log(error, "error cargar a db");
  }

 
};
export const login = (req, res) => res.send("Logear");
