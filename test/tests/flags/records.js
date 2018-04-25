const { apply, build, crcDist, validate } = require('../../util');

describe('--records-*', () => {
  for (const name of ['input-output', 'path']) {
    const fixture = `records/records-${name}`;
    const opts = { fixture };

    let config;

    it(`${name} should validate`, () => {
      expect(validate(opts)).toEqual(true);
    });

    it(`${name} should apply`, () => {
      config = apply(opts);

      expect(config).toMatchSnapshot();
    });

    it(`${name} should build`, () =>
      build(config).then((result) => {
        expect(result).toMatchSnapshot();
        expect(crcDist()).toMatchSnapshot();
      }));
  }
});
