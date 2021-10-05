import { TargetOptions } from '@angular-builders/custom-webpack';
import * as cheerio from 'cheerio';
import * as minfier from 'html-minifier';

export default (targetOptions: TargetOptions, indexHtml: string) => {
  if (((<TargetOptions>targetOptions).configuration as any).includes('production')) {
    const $ = cheerio.load(indexHtml);

    $("link[href='styles.31d6cfe0d16ae931b73c.css']").remove();

    $('script:last').remove();

    $('body').append(`<script src="assets/main.f51fa4f79f0fd4227b7c999.js" defer></script>`);
/*    "/assets/main.f51fa4f79f0fd4227b7c999.js", to ngsw-config.json
*/
    $('script').each((index, elem) => 
      $('head').append(`<link rel="preload" href=${$(elem).prop('src')} as="script">`) as any 
    );

    const minified = minfier.minify($.html(), {
      removeComments: true,
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      minifyJS: true
    });

    return minified;
  }
  
  return indexHtml;

};