import {ReplaySubject} from 'rxjs/ReplaySubject';
export const genString = function generateRandomString(sizeInKB) {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const totalChars = chars.length;
    const sizeInBytes = sizeInKB * 1024;
    let randomString = "";
  
    for (let i = 0; i < sizeInBytes; i++) {
      const randomIndex = Math.floor(Math.random() * totalChars);
      randomString += chars[randomIndex];
    }
  
    return randomString;
  };
  
const sub = () => new ReplaySubject(1);

export default sub