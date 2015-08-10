(function(win, undefined) {

    'use strict';

    var Widget = require('./widget'),
        Utils = require('./utils');

    var exports = function(){
      this._initialize();
    };

    exports.prototype = {

        _initialize: function(){

            // Register namespace
            if(!win._instance){
                win._instance = {};
                win._instance.elements = [];
                win._instance.instances = [];
                this._create();
            }

        },

        _create: function(){

            // To keep track of which embeds we have already processed
            var els = document.getElementsByTagName('script'),
                regex = /.*app\.([^/]+\.)?js/,
                _this = this;

            [].slice.apply(els).forEach(function(el){

                if(el.src.match(regex) && win._instance.elements.indexOf(el) < 0) {
                    _this._createInstance(el);
                }

            });

        },

        _createInstance: function(el){

            // get config from data-attribute on <script>-tag
            var config = el.dataset.options || '{}';

            // create element
            var node = document.createElement('div');

            // reset css styles by including cleanslate
            node.classList.add('cleanslate');

            // insert node after script tag
            el.parentNode.insertBefore(node, el.nextSibling);

            // create instance of widget
            win._instance.instances.push(new Widget(node, JSON.parse(config)));

        }

    };

    if(win._instance){
        return win._instance;
    } else {
        win._instance = new exports;
    }

}(window));