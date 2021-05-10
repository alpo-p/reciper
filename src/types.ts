/* eslint-disable @typescript-eslint/ban-types */

// Used for testing
export interface ExtendedMatchers extends jest.Matchers<void> {
  toHaveTextContent: (htmlElement: string) => object;
  toBeInTheDOM: () => void;
}

export interface RegisterAndLoginFormValues {
  username: string
  password: string
  confirmation?: string
}