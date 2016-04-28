/**
 * Created by dominik on 28/04/16.
 */

require('chai').should();
var assert = require('chai').assert;
var expect = require('chai').expect;


var winston = require('winston');
var http = require('http');
var request = require('request');

var server = require('../server');



describe("Asynchronous tasks", function () {


    it("Should check for 404 status on /", function (done) {
       done("Fail");
    });

    it("Should say hello to Dominik", function (done) {
        done("Fail");
    });

    it("Should create note ", function (done) {
        done("Fail");
    });

    it("Should have exactly one note ", function (done) {
        done("Fail");
    });

    it("Should return 404 on unexisting route ", function (done) {
        done("Fail");
    });

    it("Should retrieve note", function (done) {
        done("Fail");
    });

});

describe("Asynchronous tasks 2", function () {

    it("Should have no notes", function (done) {
        done("Fail");
    });

    it("Should create 2 notes", function (done) {
        done("Fail");
    });

    it("Should have exactly two notes note", function (done) {
        done("Fail");
    });

    it("Should Delete note", function (done) {
        done("Fail");
    });

    it("Should have one note", function (done) {
        done("Fail");
    });
});