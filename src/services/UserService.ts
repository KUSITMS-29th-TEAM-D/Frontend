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

  getUserNickname() {
    const user = this.getUser();
    if (!user) {
      return '';
    }
    return user.nickname;
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

  updateUserNickname(nickname: string) {
    const user = this.getUser();
    if (!user) {
      return;
    }
    this.setUser({ ...user, nickname });
  }

  getTestState() {
    const user = this.getUser();
    if (!user) {
      return 'NON_MEMBER';
    } else if (user.is_test) {
      return 'TESTER_MEMBER';
    } else {
      return 'NON_TESTER_MEMBER';
    }
  }
}

export const userService = new UserService();
