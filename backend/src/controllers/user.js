
import UserModel from '../models/user.js';


export async function getUsers(req, res, next) {
    const users = await UserModel.find({});
    res.status(200).json({
        data: users
    });
}

export async function getUser(req, res, next) {
try {
    const userId = req.params.userId;
    const user = await UserModel.findById(userId);
    if (!user) return next(new Error('User does not exist'));
    res.status(200).json({
    data: user
    });
} catch (error) {
    next(error)
}
}
    
export async function updateUser(req, res, next) {
try {
    const update = req.body
    const userId = req.params.userId;
    await User.findByIdAndUpdate(userId, update);
    const user = await UserModel.findById(userId)
    res.status(200).json({
    data: user,
    message: 'User has been updated'
    });
} catch (error) {
    next(error)
}
}
    
export async function deleteUser(req, res, next) {
try {
    const userId = req.params.userId;
    await UserModel.findByIdAndDelete(userId);
    res.status(200).json({
    data: null,
    message: 'User has been deleted'
    });
} catch (error) {
    next(error)
}
}