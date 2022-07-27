
const {PTM,R,REXEC} = require('../src/ptm.js')
const path = require("path")
const express = require('express');
PTM(path.join(__dirname+'/../src/ptmOrnekKomutDosyası'));

R('merhabalar PTM çalışıyoorrr','selam')
R(express,'server')
//REXEC('ls -la')

