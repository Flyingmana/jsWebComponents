import includePaths from 'rollup-plugin-includepaths';
import filesize from 'rollup-plugin-filesize';

let includePathOptions = {
    include: {},
    paths: [
        'src',
        //'node_modules/x-tag'
    ],
    external: [],
    extensions: ['.js', '.json', '.html']
};

export default {
    moduleName: 'MyBundle',
    entry: 'src/main.js',
    dest: 'dist/bundle.js',
    //format: 'umd',
    //format: 'es6',
    format: 'iife',
    globals: {
        //"x-tag": 'xtag'
    },
    //sourceMap: 'inline',
    plugins: [
        filesize(),
        includePaths(includePathOptions),
    ]
};
