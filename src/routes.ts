import { Request, Response } from 'express';
import createUser from './service/CreateUser';

export function helloWorld(request:Request, response:Response){
  const user = createUser({
    name: 'Paulo', 
    email: 'paulo.chaves@paccode.com.br', 
    password: '123456',
    techs: [
      'NodeJS',
      'ReactJS',
      'React Native',
      { title: 'FoxPro9', experience: 100},
      1994
    ],
  });
  return response.json({message:'Hello World!', user});
};