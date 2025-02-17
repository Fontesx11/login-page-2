import { Request, Response } from "express";
import { AuthUserService } from "../../services/users/AuthUserService";

class AuthUserController {

  async handle(req: Request, res:Response){

    const {name, password} =  req.body;

    const authUserService = new AuthUserService();

    const auth = await authUserService.execute({
      name,
      password
    });

    if("status" in auth){
      res.status(auth.status).json({ message: auth.message });
      return;
    }

    res.json(auth);
    return;
  }
}

export { AuthUserController }