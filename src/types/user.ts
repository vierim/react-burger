export type TUser = {
  readonly email: string;
  readonly name: string;
};

export type TUserData = TUser & {
  readonly password: string;
};

export type TUserAuth = Omit<TUser, 'name'> & {
  readonly password: string;
};

export type TUserEmail = Omit<TUser, 'name'>;

export type TUserNewPassword = {
  readonly token: string;
  readonly password: string;
};

export type TUserUpdate = {
  readonly [fn in keyof TUserData]?: TUserData[fn];
};
