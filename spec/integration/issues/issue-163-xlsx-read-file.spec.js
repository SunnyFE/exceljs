'use strict';

var chai = require('chai');
var verquire = require('../../utils/verquire');
var PromishLib = require('../../../lib/utils/promish');
var Enums = require('../../../lib/doc/enums');

var Excel = verquire('excel');

var expect = chai.expect;
chai.use(require('chai-datetime'));

// this file to contain integration tests created from github issues
var TEST_XLSX_FILE_NAME = './spec/out/wb.test.xlsx';

describe('github issues', function() {
  it('issue 163 - Error while using xslx readFile method', function() {
    var wb = new Excel.Workbook();
    return wb.xlsx.readFile('./spec/integration/data/test-issue-163.xlsx')
      .then(function() {
        // arriving here is success
        expect(true).to.equal(true);
      });
  });
});