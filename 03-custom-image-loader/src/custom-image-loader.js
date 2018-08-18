const { getOptions } = require('loader-utils');

function resourePathFor(mod) {
  if (mod.reasons && (mod.reasons.length > 0 && mod.reasons[0].module.resource)) {
    return findEntry(mod.reasons[0].module)
  }
  return mod.resource;
}

module.exports =  function(source, i, j) {
  const
      options = getOptions(this),
      imagePath = options.assetPath(resourePathFor(this));

  // Apply some transformations to the source...
  eval(require("pryjs").it);
  return JSON.stringify({});
}