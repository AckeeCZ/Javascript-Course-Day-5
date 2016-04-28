/**
 * Created by dominik on 28/04/16.
 */

var chai = require('chai')
chai.should();
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);


var winston = require('winston');
var http = require('http');
var request = require('request');


describe("Asynchronous tasks", function () {

    it("SimpleAsynchronous Task", function (done) {
        done();
    });

    it("Too long asyncrhonous timeline", function (done) {
        setInterval(function () {
            done()
        }, 2100);

    });

    it("I need shorter timeout", function (done) {
        this.timeout(100);
        function nthFibonacci(n) {
            return n < 1 ? 0
                : n <= 2 ? 1
                : nthFibonacci(n - 1) + nthFibonacci(n - 2);
        }

        nthFibonacci(37);
        done()
    });

    it('Successful request', function (done) {

        var server = http.createServer(function (req, res) {
            res.end('Hello I am awake');
        }).listen(0);

        request('http://127.0.0.1:' + server.address().port, function (err, res, body) {
            expect(body).to.equal('Hello I am awake');
            server.close();
            done();
        });

    });

    it('Timeouted request', function (done) {

        var server = http.createServer(function (req, res) {
            setTimeout((function () {
                res.end('Hello I am awake');
            }), 200);
        }).listen(0);

        var opts = {url: 'http://127.0.0.1:' + server.address().port, timeout: 150};

        request(opts, function (err, res, body) {
            expect(err).to.be.an('Error');
            server.close();
            done();
        });

    });

    it("Promise Async", function () {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("Done");
            }, 100);
        });

        return expect(promise).to.eventually.equal("Done");
    });


});
