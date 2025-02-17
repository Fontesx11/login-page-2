import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";

class CreateUserController {

  async handle(req: Request, res:Response){

    const {name, email, password} =  req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password
    });

    if("status" in user){
      res.status(user.status).json({ message: user.message });
      return;
    }

    res.json(user);
    return;
  }
}

export { CreateUserController }