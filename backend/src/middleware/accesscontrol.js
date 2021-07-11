
import AccessControl from 'accesscontrol'

const access = new AccessControl();
 
export const roles = (function() {
 access.grant("student")
    .readOwn("profile")
    .updateOwn("profile")
 
 access.grant("admin")
    .extend("student")
    .updateAny("profile")
    .deleteAny("profile")
 
return access;
})();


export const grantAccess = function(action, resource) {
    return async (req, res, next) => {
        try {
        const permission = roles.can(req.user.role)[action](resource);
        if (!permission.granted) {
        return res.status(401).json({
        error: "You don't have enough permission to perform this action"
        });
        }
        next()
        } catch (error) {
        next(error)
        }
    }
}
    
export const allowIfLoggedin = async (req, res, next) => {
    try {
        const user = res.locals.loggedInUser;
        if (!user)
            return res.status(401).json({
            error: "You need to be logged in to access this route"
        });
        req.user = user;
        next();
        } catch (error) {
            next(error);
    }
}