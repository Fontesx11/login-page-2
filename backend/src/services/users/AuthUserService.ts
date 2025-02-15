import prismaClient from "../../prisma";
import { compare } from "bcrypt";
import { sign } from 'jsonwebtoken'

interface AuthUserRequest {
  name: string,
  password: string,
}

class AuthUserService {
  async execute({name, password}:AuthUserRequest){
    
    const user = await prismaClient.user.findFirst({
      where:{
        username: name
      }
    })

    if(!user){
      throw new Error("Email or Password incorrect")
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new Error("Email or Password incorrect")
    }

    const token = sign(
      {
        name: user.username,
        email: user.email
      },
      process.env.JWT_SECRET_KEY,
      {
        subject: user.id.toString(),
        expiresIn: '5d'
      }
    )

    return {
      id: user.id,
      name: user.username,
      email: user.email,
      token: token
    }

  }
}

export { AuthUserService }