import { expect as expectChai } from 'chai';
import selectCourse from './courseActionCreators';
import unSelectCourse from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreators', () => {
  it('selectCourse', () => {
    const data = selectCourse(1);
    expectChai(data).to.be.an('object');
    expectChai(data).to.have.property('type');
    expectChai(data.type).to.equal(SELECT_COURSE);
    expectChai(data).to.have.property('index');
    expectChai(data.index).to.equal(1);
  });
  it('unSelectCourse', () => {
    const data = unSelectCourse(1);
    expectChai(data).to.be.an('object');
    expectChai(data).to.have.property('type');
    expectChai(data.type).to.equal(UNSELECT_COURSE);
    expectChai(data).to.have.property('index');
    expectChai(data.index).to.equal(1);
  });
});
