import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Test getFullYear', () => {
  it('test getFullYear', () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
  });
});

describe('Test getFooterCopy', () => {
  it('test getFooterCopy', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
});

describe('Test getLatestNotification', () => {
  it('test getLatestNotification', () => {
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
