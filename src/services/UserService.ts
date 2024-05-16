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

  getUserState() {
    const user = this.getUser();
    if (!user) {
      return 'NON_MEMBER';
    } else if (user.nickname === '') {
      return 'PRE_MEMBER';
    } else {
      return 'MEMBER';
    }
  }
}

export const userService = new UserService();
