var gulp   = require('gulp');
var del    = require('del');

var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
    replaceString: /\bgulp[\-.]/
});

var dest = "src/";

gulp.task('js', function() {
    var jsFiles = ['scripts/*'];
    gulp.src(plugins.mainBowerFiles().concat(jsFiles))
        .pipe(plugins.filter('*.js'))
        .pipe(plugins.concat('main.js'))
        //.pipe(plugins.uglify())
        .pipe(gulp.dest(dest + 'js'));
});

gulp.task('css', function() {
    var cssFiles = ['styles/*'];
    gulp.src(plugins.mainBowerFiles().concat(cssFiles))
        .pipe(plugins.filter('*.css'))
        .pipe(plugins.concat('main.css'))
        .pipe(plugins.uglifycss())
        .pipe(gulp.dest(dest + 'css'));
});

gulp.task('watch', function () {
    gulp.watch(['./scripts/*'], ['js']);
    gulp.watch(['./styles/*'], ['css']);
});

gulp.task('default', ['watch']);