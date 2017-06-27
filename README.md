## SETUP and INSTALL

### From https://www.learnhowtoprogram.com/javascript/introduction-to-javascript/object-oriented-javascript-with-node-modules

1. Create HTML file
2. Create a single js file with back/front end
3. Divide js file into "x.js" backend and "x-interface.js" frontend.  Adjust script to find new js file.  Adjust HTML to create Calculator object
4. exports.calculatorModule = Calculator at end of main js file.  
  Think of exports as a giant, global JavaScript object. We are creating a new property on it called calculatorModule, and we are setting this property equal to our Calculator constructor function.
5. In interface js file, add :
  var Calculator = require ('./../x.js').calculatorModule;
6.  NOTE: exports and require won't work until browserify, in 3) below

### From https://www.learnhowtoprogram.com/javascript/introduction-to-javascript/introducing-npm-and-gulp

1. npm init
  Creates manifest file where npm stores packages needed for project
2. npm install gulp --save-dev
  Gulp will be in charge of optimizing our code and packaging it up in a format that the browser can understand.
  Gulp is now added under "devDependencies" in package.json manifest.  
3. npm install browserify --save-dev
  Browserify will allow export and require to work.  It's also added under devDependencies.
4. .gitignore =
  node_modules/
  .DS_Store

### From https://www.learnhowtoprogram.com/javascript/introduction-to-javascript/writing-gulp-tasks

1. npm install gulp --save-dev   /// if probs, use -g   or use sudo
2. in gulpfile.js,
  var gulp = require('gulp');
3. gulp.task('myTask', function(){
    console.log('hellow orld');
  });

### Browserify from https://www.learnhowtoprogram.com/javascript/introduction-to-javascript/using-browserify-with-gulp
1. npm install vinyl-source-stream --save-dev  

2. In Gulpfile.js
//add these to your existing code
var browserify = require('browserify');
var source = require('vinyl-source-stream');

3.  gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/pingpong-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
4. Run gulp jsBrowserify
  This installs a build folder with app.js in it, which looks like a bunch of internal js?

### Concatenation from https://www.learnhowtoprogram.com/javascript/introduction-to-javascript/concatenation

1. Add another js file
2. npm install gulp-concat --save-dev  
3. Next, let's require this package and create a gulp task to use it. While the order of tasks in gulpfile.js doesn't actually matter to gulp, let's place it before our browserify task, since this concatenation task will happen before the browserify task.
4.  modify browserify to see allConcat.js:
gulp.task('concatInterface', function() {
  return gulp.src(['./js/calculator-interface.js', './js/signup-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});
5. run gulp jsBrowserify again! - now it will do concat first then browserify.
6.  Finally, glob it to use anything that ends in -interface
gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

\*
If we maintain this naming convention as our project grows we won't need to modify our gulp concatenate/browserify tasks if we add new files - we just name them something ending in -interface.js if they are going to be used in the browser, and keep them in the js folder. Then they will automatically be included in build/js/app.js.









# BOWER
### Bower is a package manager but for frontend = BootStrap, jQuery.
* npm install bower -g   > bower init
* bower install jquery --save  > bower install
* .gitignore:  add bower_components
* Change script src from ajax to <script src="bower_components/jquery/dist/jquery.min.js"></script>
* Load jquery before bootstrap, since jq is dependent on bootstrap:
  * <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

### Moment.js
*
