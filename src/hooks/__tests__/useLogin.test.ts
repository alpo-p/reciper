import useLogin from "../useLogin";

describe('useLogin hook', () => {
  it('return false with incorrect credentials', () => {
    const username = 'UKKO';
    const password = 'VAARA';
    const success = useLogin({username, password});
    expect(success).toBe(false);
  });

  it('returns true with correct credentials (Alpo: 12345)', () => {
    const username = 'Alpo';
    const password = '12345';
    const success = useLogin({username, password});
    expect(success).toBe(true);
  }); 
});