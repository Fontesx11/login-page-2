import { Request, Response } from "express";
import { AuthUserService } from "../../services/users/AuthUserService";

class AuthUserController {

  async handle(req: Request, res:Response){

    const {name, password} =  req.body;

    const authUserService = new AuthUserService();

    const user = await authUserService.execute({
      name,
      password
    });

    res.json(user)
  }
}

export { AuthUserController }