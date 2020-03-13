var express = require('express');
var mongoose = require('mongoose')
var mongoURL = 'mongodb+srv://abai:websitedb342@personalwebsite-bpigs.mongodb.net/test';

mongoose.connect(mongoURL, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('we are in boys')
})
