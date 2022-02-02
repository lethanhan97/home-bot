/* eslint-disable no-undef */ // Jest is automatically detected in this test file
const { getMessage, getUser } = require('./handler');
const { getCurrentDateMock } = require('./mocks/date');
const date = require('./date');

describe('handler', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getUser', () => {
    it.each([
      ['2021-10-08', '@AnFromVietnam'],
      ['2021-10-22', '@AnFromVietnam'],
      ['2021-10-01', '@ashleyteehee'],
      ['2021-10-15', '@ashleyteehee'],
    ])('returns the correct user given date', (_date, _user) => {
      jest
        .spyOn(date, 'getCurrentDate')
        .mockImplementation(() => getCurrentDateMock(_date));

      expect(getUser()).toBe(_user);
    });
  });

  describe('getMessage', () => {
    it.each([
      ['2021-10-22', '@AnFromVietnam'],
      ['2021-10-01', '@ashleyteehee'],
    ])('returns the correct message given date', (_date, _user) => {
      jest
        .spyOn(date, 'getCurrentDate')
        .mockImplementation(() => getCurrentDateMock(_date));

      const currentDate = getCurrentDateMock(_date);
      const twoDaysLaterDate = getCurrentDateMock(_date).add(2, 'd');

      expect(getMessage()).toBe(
        `Hi ${_user}, today is ${currentDate.format(
          'MMMM Do YYYY'
        )} and it is your turn to clean! Remember to clean the toilet, living room as well as your room by ${twoDaysLaterDate.format(
          'MMMM Do YYYY'
        )}`
      );
    });
  });
});
