import { Request, Response } from "express";
import { GetUserService } from "../../services/users/GetUserService";


class GetUserController {

  async handle( req: Request, res: Response){
    const authHeader = req.headers.authorization;

    if(!authHeader){
      res.status(401).json({error: "Token has not been provided"});
      return;
    }
    const [, token] = authHeader.split(" ");
    try{
      const getUserService = new GetUserService();
      const user = await getUserService.execute({token});

      if(!user){
        res.status(404).json({error: "User not Found"})
      }

      res.json(user);
      return;
    } catch(error){
      res.status(401).json({error: "Invalid Token"})
      return;
    }
  }
}

export { GetUserController }
