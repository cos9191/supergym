import gulp from 'gulp';
import browserSync from 'browser-sync';
import del from 'del';
import {compileStyles, compileMinStyles} from './gulp/compileStyles.mjs';
import {copy, copyImages, copySvg} from './gulp/copyAssets.mjs';
import {compileMainMinScripts, compileMainScripts, compileVendorScripts} from './gulp/compileScripts.mjs';
import {optimizeSvg, sprite, createWebp, optimizePng, optimizeJpg} from './gulp/optimizeImages.mjs';
import pug from './gulp/compilePug.mjs';
import bemlinter from 'gulp-html-bemlinter';
import { htmlValidator } from "gulp-w3c-html-validator";

const server = browserSync.create();
const streamStyles = () => compileStyles().pipe(server.stream());
const clean = () => del('build');
const refresh = (done) => {
  server.reload();
  done();
};

const lintBem = () => {
  return gulp.src('build/*.html')
    .pipe(bemlinter());
}

const validateMarkup = () => {
  return gulp.src(['build/*.html', '!build/sitemap.html', '!build/ui-kit.html'])
    .pipe(htmlValidator.analyzer())
    .pipe(htmlValidator.reporter({ throwErrors: true }));
}

const syncServer = () => {
  server.init({
    server: 'build/',
    index: 'sitemap.html',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch('source/pug/**/*.pug', gulp.series(pug, refresh));
  gulp.watch('source/sass/**/*.{scss,sass}', streamStyles);
  gulp.watch('source/js/**/*.{js,json}', gulp.series(compileMainScripts, compileVendorScripts, refresh));
  gulp.watch('source/data/**/*.{js,json}', gulp.series(copy, refresh));
  gulp.watch('source/img/**/*.svg', gulp.series(copySvg, sprite, pug, refresh));
  gulp.watch('source/img/**/*.{png,jpg,webp}', gulp.series(copyImages, pug, refresh));

  gulp.watch('source/favicon/**', gulp.series(copy, refresh));
  gulp.watch('source/video/**', gulp.series(copy, refresh));
  gulp.watch('source/downloads/**', gulp.series(copy, refresh));
  gulp.watch('source/*.php', gulp.series(copy, refresh));
};

const build = gulp.series(clean, copy, sprite, gulp.parallel(compileMinStyles, compileMainMinScripts, compileVendorScripts, pug, optimizePng, optimizeJpg, optimizeSvg));
const dev = gulp.series(clean, copy, sprite, gulp.parallel(compileMinStyles, compileMainMinScripts, compileVendorScripts, pug, optimizePng, optimizeJpg, optimizeSvg), syncServer);
const start = gulp.series(clean, copy, sprite, gulp.parallel(compileStyles, compileMainScripts, compileVendorScripts, pug), syncServer);
const nomin = gulp.series(clean, copy, sprite, gulp.parallel(compileStyles, compileMainScripts, compileVendorScripts, pug, optimizePng, optimizeJpg, optimizeSvg));

export {createWebp as webp, build, start, dev, nomin, lintBem, validateMarkup};
