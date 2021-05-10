import { RegisterAndLoginFormValues } from '../types';

export default function (values: RegisterAndLoginFormValues): boolean {
  const username = values.username;
  const password = values.password;
  if (username==='Alpo' && password==='12345') {
    return true;
  } 
  return false;
}