
export interface UserI{
email:string,
displayName:string,
photoURL:string,
uid:string
}


export interface AuthContextI{
user:UserI,
}