const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

/*
	Add your code here ...
*/

app.listen(9999, () => {
	console.log('Server up at 9999')
})
