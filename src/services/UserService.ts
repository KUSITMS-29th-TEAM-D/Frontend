import { Cookies } from 'react-cookie';

import { User } from '@/types/user.type';

class UserService {
  cookies = new Cookies();

  setUser(userInformation: User) {
    this.cookies.set('user', userInformation);
  }

  getUser() {
    return this.cookies.get('user');
  }

  removeUser() {
    this.cookies.remove('user');
  }
}

export const userService = new UserService();
