'use strict';

var wl = window.location;

module.exports = wl.origin || wl.protocol+'//'+wl.hostname+(wl.port ? ':'+wl.port : '');
