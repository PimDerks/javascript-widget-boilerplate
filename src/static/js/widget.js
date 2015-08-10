'use strict';

/**
 * Initialize module.
 * @param {element} element - The node (element) to load this module on.
 * @param {object} options - Options for this instance of this module.
 */
var exports = function(element, options) {

    this._element = element;
    this._options = options || {};
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