let glob = require('glob');
const getPath = function() {
  let files = glob.sync('src/pages/**/main\.js');
  let obj = {};
  files.forEach(function(filepath) {
    let name = filepath.split('/')[2];
    obj[name] = {
      entry : filepath,
      template : glob.sync(`template/${name}.html`).length > 0 ? glob.sync(`template/${name}.html`)[0] : glob.sync(`template/index.html`)[0],
      filename: `${name}.html`
    }
  });
  return obj;
};
module.exports = {
  pages: (() => {
    return getPath();
  })(),
}