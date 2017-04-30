var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cache = require('gulp-cache');
var del = require('del');

var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

var ghPages = require('gulp-gh-pages');

var cssFolders = [
  {src: 'src/css/*.css', dest: 'dist/css'},
  {src: 'src/views/css/*.css', dest: 'dist/views/css'},
];

var jsFolders = [
  {src: 'src/js/*.js', dest: 'dist/js'},
  {src: 'src/views/*js', dest: 'dist/views/js'},
];

var htmlFolders = [
  {src: 'src/*.html', dest: 'dist/'},
  {src: 'src/views/*.html', dest: 'dist/views'},
];

var imgFolders = [
  {src: 'src/img/*', dest: 'dist/img'},
  {src: 'src/views/images/*', dest: 'dist/views/images'},
]

gulp.task('css', function() {
  return cssFolders.map(function(folder) {
    return gulp.src(folder.src)
      .pipe(cssnano())
      .pipe(gulp.dest(folder.dest))
  })
});

gulp.task('js', function() {
  return jsFolders.map(function(folder) {
    return gulp.src(folder.src)
      .pipe(uglify())
      .pipe(gulp.dest(folder.dest))
  })
});

gulp.task('html', function() {
  return htmlFolders.map(function(folder) {
    return gulp.src(folder.src)
      .pipe(gulp.dest(folder.dest))
  })
});

gulp.task('images', function() {
  return imgFolders.map(function(folder) {
    return gulp.src(folder.src)
      .pipe(imagemin({verbose:true}))
      .pipe(gulp.dest(folder.dest))
  })
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  });
});

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('src/css/**/*.css', browserSync.reload);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
  return del('dist');
});

gulp.task('build', ['css', 'js', 'html', 'images']);

gulp.task('deploy', function() {
  return gulp.src('dist/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['watch']);
