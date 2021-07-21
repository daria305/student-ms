import UserModel from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


async function hashPassword(password) {
 return await bcrypt.hash(password, 10);
}
 
async function validatePassword(plainPassword, hashedPassword) {
 return await bcrypt.compare(plainPassword, hashedPassword);
}
 
export const signup = async (req, res, next) => {
 try {
  const { email, password, role, name, surname } = req.body
  const hashedPassword = await hashPassword(password);
  const newUser = new UserModel({ name, surname, email, password: hashedPassword, role: role || "student" });
  const accessToken = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
   expiresIn: "1d"
  });
  newUser.accessToken = accessToken;
  await newUser.save();
  res.json({
   data: newUser,
   accessToken
  })
 } catch (error) {
  next(error)
 }
}

export const login = async (req, res, next) => {
    try {
     const { email, password } = req.body;

     const user = await UserModel.findOne({ email });
     if (!user) return next(new Error('Email does not exist'));

     const validPassword = await validatePassword(password, user.password);
     if (!validPassword) return next(new Error('Password is not correct'))

     const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
     });

     await UserModel.findByIdAndUpdate(user._id, { accessToken })
     
     res.status(200).json({
      data: { email: user.email, role: user.role, name: user.name, surname: user.surname, userId: user._id},
      accessToken
     })
    } catch (error) {
     next(error);
    }
   }