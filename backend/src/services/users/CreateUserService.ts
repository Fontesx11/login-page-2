import prismaClient from "../../prisma";
import { hash } from "bcrypt";

interface UserRequest {
  name: string,
  email: string,
  password: string,
}

class CreateUserService {
  async execute({name, email, password}: UserRequest){

    if(!email){
      throw new Error("Email does not exists");
    }

    const userAlredyExits = await prismaClient.user.findFirst({
      where:{
        email:email
      }
    })

    if(userAlredyExits){
      throw new Error("User alredy exists");
    }

    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data:{
        username:name,
        email:email,
        password: passwordHash,
      },
      select:{
        id: true,
        username: true,
        email:true
      }
    })

    return user;
  }
}

export { CreateUserService }
