import prismaClient from "../../prisma";
import jwt from 'jsonwebtoken'


interface TokenPayload{
  sub: string;
  name: string;
  email: string;
  iat: number;
  exp: number;
}

class GetUserService{
  async execute({token}){
    try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY) as TokenPayload;
      
      const user  = await prismaClient.user.findUnique({
        where: {id: Number(decoded.sub)},
        select: { id: true, username: true, email: true}
      });

      return user
    } catch(error){
      throw new Error("Invalid Token")
    }
  }
}

export { GetUserService }