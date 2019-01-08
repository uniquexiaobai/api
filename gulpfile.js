const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const replace = require('gulp-replace');
const spritesmith = require('gulp.spritesmith');
const browserSync = require('browser-sync').create();
const minifycss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const ftp = require('vinyl-ftp');
const settings = require('./settings');

gulp.task('default', ['concat-css', 'browser-sync', 'watch']);

gulp.task('build', ['htmlmin', 'minify-css', 'copy'], () => {
	console.log('#build success#');
});

gulp.task('deploy', () => {
	const ftpConf = settings.ftp;
	const conn = ftp.create({
        host: ftpConf.host,
        port: ftpConf.port,
		user: ftpConf.user,
		password: ftpConf.password
	});

	return gulp.src('dist/*.*', { buffer: false })
		.pipe(conn.dest('webroot/api'));
});

gulp.task('browser-sync', () => {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	});
});

gulp.task('watch', () => {
    gulp.watch("src/*.html").on('change', browserSync.reload);
	gulp.watch(['src/images/*.png', 'src/css/*.css'], ['concat-css', browserSync.reload]);
});

gulp.task('sprite', () => {
    const options = {
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    };
    let spriteData = gulp.src(['src/images/*.png', 'src/images/letters/*.png']).pipe(spritesmith(options));

    spriteData.img.pipe(gulp.dest('src'));
    return spriteData.css.pipe(gulp.dest('src/css'));
});

gulp.task('concat-css', ['sprite'], () => {
	return gulp.src(['src/css/*.css'])
		.pipe(concat('style.css'))
		.pipe(gulp.dest('src'));
});

gulp.task('htmlmin', () => {
	const options = {
		removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
       	removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
	
	gulp.src('src/index.html')
		.pipe(replace('lib/bootstrap.css', 'https://lib.baomitu.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css'))
		.pipe(replace('lib/vue.js', 'https://lib.baomitu.com/vue/2.5.17-beta.0/vue.min.js'))
		.pipe(htmlmin(options))
		.pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
	gulp.src(['src/style.css'])
		.pipe(minifycss())
		.pipe(autoprefixer({
			cascade: true,
			remove: true
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('copy', () => {
    gulp.src('src/sprite.png').pipe(gulp.dest('dist'));
});
