import path from 'path';
import { expect } from 'chai';
import { jscodeshift } from '../../../testUtils';
import transform from './sx-v6';
import readFile from '../../util/readFile';

function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

describe('@mui/codemod', () => {
  describe('v6.0.0', () => {
    describe('basic sx-v6', () => {
      it('transforms props as needed', () => {
        const actual = transform(
          { source: read('./test-cases/basic-sx.actual.js') },
          { jscodeshift },
          {},
        );

        const expected = read('./test-cases/basic-sx.expected.js');
        expect(actual).to.equal(expected, 'The transformed version should be correct');
      });

      it('should be idempotent', () => {
        const actual = transform(
          { source: read('./test-cases/basic-sx.expected.js') },
          { jscodeshift },
          {},
        );

        const expected = read('./test-cases/basic-sx.expected.js');
        expect(actual).to.equal(expected, 'The transformed version should be correct');
      });
    });

    describe('css vars sx-v6', () => {
      it('transforms props as needed', () => {
        const actual = transform(
          { source: read('./test-cases/sx-css-vars.actual.js') },
          { jscodeshift },
          {},
        );

        const expected = read('./test-cases/sx-css-vars.expected.js');
        expect(actual).to.equal(expected, 'The transformed version should be correct');
      });

      it('should be idempotent', () => {
        const actual = transform(
          { source: read('./test-cases/sx-css-vars.expected.js') },
          { jscodeshift },
          {},
        );

        const expected = read('./test-cases/sx-css-vars.expected.js');
        expect(actual).to.equal(expected, 'The transformed version should be correct');
      });
    });

    describe('dynamic spread sx-v6', () => {
      it('transforms props as needed', () => {
        const actual = transform(
          { source: read('./test-cases/sx-dynamic.actual.js') },
          { jscodeshift },
          {},
        );

        const expected = read('./test-cases/sx-dynamic.expected.js');
        expect(actual).to.equal(expected, 'The transformed version should be correct');
      });

      it('should be idempotent', () => {
        const actual = transform(
          { source: read('./test-cases/sx-dynamic.expected.js') },
          { jscodeshift },
          {},
        );

        const expected = read('./test-cases/sx-dynamic.expected.js');
        expect(actual).to.equal(expected, 'The transformed version should be correct');
      });
    });

    describe('dynamic conditional sx-v6', () => {
      it('transforms props as needed', () => {
        const actual = transform(
          { source: read('./test-cases/sx-dynamic2.actual.js') },
          { jscodeshift },
          {},
        );

        const expected = read('./test-cases/sx-dynamic2.expected.js');
        expect(actual).to.equal(expected, 'The transformed version should be correct');
      });

      it('should be idempotent', () => {
        const actual = transform(
          { source: read('./test-cases/sx-dynamic2.expected.js') },
          { jscodeshift },
          {},
        );

        const expected = read('./test-cases/sx-dynamic2.expected.js');
        expect(actual).to.equal(expected, 'The transformed version should be correct');
      });
    });
  });
});
