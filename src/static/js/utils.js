module.exports = {

    getQueryString: function(url){

        var qs;

        // has query
        var has = url.lastIndexOf('?');

        if(has >= 0){
            qs = url.slice(has + 1);
        }

        return qs;

    },

    queryStringToObject: function(qs){
        var obj = {};

        // split on &
        var split = qs.split('&');

        split.forEach(function(s){

            // split on =
            var index = s.indexOf('='),
                key = s.slice(0, index),
                val = s.slice(index + 1);

            obj[key] = val;

        });

        return obj;

    }

};