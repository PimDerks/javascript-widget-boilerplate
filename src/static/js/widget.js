'use strict';

var Utils = require('./utils'),
    _ = require('./vendor/underscore');

/**
 * Initialize module.
 * @param {element} element - The node (element) to load this module on.
 * @param {object} options - Options for this instance of this module.
 */
var exports = function(element, options) {

    // default options
    var opts = {
        'lorem': 'default-1',
        'ipsum': 2,
        'dolor': 3,
        'sit': 4
    };

    // custom options
    var options = options || {};

    // merge options
    this._options = _.extend(opts, options);

    // reference to node
    this._element = element;

    this._initialize();

};

exports.prototype = {

    /**
     * Initialize module.
     *
     * @memberof Test
     * @static
     * @private
     */
    _initialize: function() {
        this._element.innerHTML = 'Widget';
        console.log('Create widget on element', this._element, 'with options', this._options);
    },

    /**
     * Clean up when unloading this module.
     *
     * @memberof Test
     * @static
     * @public
     */
    unload: function() {

    }

};

module.exports = exports;