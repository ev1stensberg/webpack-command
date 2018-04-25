const { apply, build, crcDist, validate } = require('../../util');

const fixture = 'profile/profile';
const opts = { fixture };

let config;

describe('--profile', () => {
  it(`should validate`, () => {
    expect(validate(opts)).toEqual(true);
  });

  it(`should apply`, () => {
    config = apply(opts);

    expect(config).toMatchSnapshot();
  });

  it(`should build`, () =>
    build(config).then((result) => {
      expect(/factory:\d+ms building:\d+ms = \d+ms/.test(result)).toBe(true);
      expect(crcDist()).toMatchSnapshot();
    }));
});
