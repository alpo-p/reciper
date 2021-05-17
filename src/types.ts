/* eslint-disable @typescript-eslint/ban-types */

// Used for testing
export interface ExtendedMatchers extends jest.Matchers<void> {
  toHaveTextContent: (htmlElement: string) => object;
  toBeInTheDOM: () => void;
}

export interface ILogin {
  username: string
  password: string
}

export interface IRegister extends ILogin {
  confirmation: string
}