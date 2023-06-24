import { Role } from "./role"

export class User {
  userId:number
  userName:string
  userPassword:string
  userPicture:string
  roles:Role[]
}
