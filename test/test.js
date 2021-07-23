let chai = require('chai');
let expect = chai.expect;
const superagent = require('superagent');

const config = require('../env').config;
const baseUrl = config.server.baseUrl;


describe('Test Run', function () {

    before(async () => {
        try {
            console.log('Test run will be started here');
            console.log('Base URL used for the test run: ' + baseUrl);
        } catch (err) {
            throw err;
        }
    });

    after(async () => {
        try {
            console.log('Test run will be finished here');
        } catch (err) {
            throw err;
        }
    });

    describe('Test Suite 1', function () {

        before(async () => {
            try {
                console.log('Test Suite 1 will be started here');
            } catch (err) {
                throw err;
            }
        });

        after(async () => {
            try {
                console.log('Test Suite 1 will be finished here');
            } catch (err) {
                throw err;
            }
        });

        it('Test 1', function () {
            try {
                expect("tea").to.have.lengthOf(3);
            } catch (err) {
                throw(err);
            }
        });

        it('Test 2', async function () {
            try {
                const res = await superagent.get(baseUrl);
                //console.log('Test 2 response: ' + res.body.msg)
                expect(res.body.msg).to.be.equal('Hello World.')
            } catch (err) {
                throw(err);
            }
        });
    });

    describe('Test Suite 2', function () {

        before(async () => {
            try {
                console.log('Test Suite 2 will be started here');
            } catch (err) {
                throw err;
            }
        });

        after(async () => {
            try {
                console.log('Test Suite 2 will be finished here');
            } catch (err) {
                throw err;
            }
        });

        it('Test 3', function () {
            try {
                expect("cucumber").to.have.lengthOf(8);
            } catch (err) {
                throw(err);
            }
        });

        it('Test 4', async function () {
            try {
                const res = await superagent.get(baseUrl);
                //console.log('Test 4 response: ' + res.body.msg)
                expect(res.body.msg).to.be.equal('Hello World.')
            } catch (err) {
                throw(err);
            }
        });
    });
});
