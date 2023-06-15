/*
Add a test that uses the id 5debd764a7c57c7839d722e9 and verifies that the following data is returned:
*/

import getAllNotificationsByUser from './notifications';
import { expect as expectChai } from 'chai';

describe('getAllNotificationsByUser', () => {
  it('should return correct data', () => {
    const data = getAllNotificationsByUser('5debd764a7c57c7839d722e9');
    expectChai(data).to.be.an('array');
    expectChai(data).to.have.lengthOf(2);
    expectChai(data[0]).to.have.property('guid');
    expectChai(data[0].guid).to.equal('2d8e40be-1c78-4de0-afc9-fcc147afd4d2');
    expectChai(data[1].guid).to.equal('280913fe-38dd-4abd-8ab6-acdb4105f922');
    expectChai(data[0]).to.have.property('isRead');
    expectChai(data[0]).to.have.property('type');
    expectChai(data[0]).to.have.property('value');
  });
  it('should return empty array for non-existent user', () => {
    const data = getAllNotificationsByUser('this-user-does-not-exist');
    expectChai(data).to.be.an('array');
    expectChai(data).to.have.lengthOf(0);
  });
});
