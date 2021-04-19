import 'mocha';
import {expect} from 'chai';
import {AddReduce} from '../src/addReduce';
import {SubReduce} from '../src/subReduce';
import {ProdReduce} from '../src/prodReduce';
import {DivReduce} from '../src/divReduce';

const addRed = new AddReduce(4, 4, 2); // 10
const subRed = new SubReduce(10, 5, 2); // 3
const prodRed = new ProdReduce(2, 2, 2); // 8
const divRed = new DivReduce(100, 2, 2); // 25
const mockAddReduce = new AddReduce(2, 2);
describe('Reduce class tests', () => {
  describe('Getter & Setters tests', () => {
    it('mockAddReduce.setNumbers([1, 2]) should set [1, 2] correctly', () => {
      mockAddReduce.setNumbers([1, 2]);
      expect(mockAddReduce.getNumbers()).to.eql([1, 2]);
    });
    it('mockAddReduce.getNumbers() should equal [1, 2]', () => {
      expect(mockAddReduce.getNumbers()).to.eql([1, 2]);
    });
  });
  describe('AddReduce class tests', () => {
    it('addRed.run() should return 10', () => {
      expect(addRed.run()).to.equal(10);
    });
  });
  describe('SubReduce class tests', () => {
    it('subRed.run() should return 3', () => {
      expect(subRed.run()).to.equal(3);
    });
  });
  describe('ProdReduce class tests', () => {
    it('prodRed.run() should return 8', () => {
      expect(prodRed.run()).to.equal(8);
    });
  });
  describe('DivReduce class tests', () => {
    it('divRed.run() should return 25', () => {
      expect(divRed.run()).to.equal(25);
    });
  });
});
