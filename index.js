'use strict';

module.exports = function(content){
  return content.replace(/@import\s+url\(.+\)\s*;/g, '');
}
