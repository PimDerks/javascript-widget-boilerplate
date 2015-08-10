module.exports = (function(){

    return {

        // roots
        roots: {
            src: './src',
            www: './www',
            dest: './dest'
        },

        // path
        paths: {
            static: 'static',
            sass: 'scss',
            css: 'css',
            js: 'js'
        },

        // server
        server: {
            port: 4444
        }

    }

}());