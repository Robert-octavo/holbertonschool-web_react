import { getAllNotificationsByUser, normalizedData } from './notifications';
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
  it('normalized data has a correct result array', () => {	
    let resArray = [
      '5debd76480edafc8af244228',
      '5debd764507712e7a1307303',
      '5debd76444dd4dafea89d53b',
      '5debd76485ee4dfd1284f97b',
      '5debd7644e561e022d66e61a',
      '5debd7644aaed86c97bf9d5e',
      '5debd76413f0d5e5429c28a0',
      '5debd7642e815cd350407777',
      '5debd764c1127bc5a490a4d0',
      '5debd7646ef31e0861ec1cab',
      '5debd764a4f11eabef05a81d',
      '5debd764af0fdd1fc815ad9b',
      '5debd76468cb5b277fd125f4',
      '5debd764de9fa684468cdc0b',
    ];

    resArray.sort();
    resArray = resArray.toString();

    const data = [...normalizedData.result];
    data.sort();
    const dataString = data.toString();

    expectChai(dataString).to.equal(resArray);
  });
});
