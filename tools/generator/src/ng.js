let cli = require('@angular/cli/lib/cli');
if ('default' in cli) {
  cli = cli['default'];
}
const fs = require('fs');
const { humanize } = require('./utils');

async function ng(args) {
  console.error(args);
  return cli({cliArgs: args, inputStream: process.stdin, outputStream: process.stdout})
      .catch((err) => {
        console.error('Unknown error: ' + err.toString());
        process.exit(127);
      });
};
module.exports.ng = ng;

const cmpIdx = 0;
module.exports.ngFromTemplate = async function ngFromTemplate(...args) {
  const {featureName, componentName} = args.pop();

  // reconstruct the final component filepath
  // NOTE: args[2] = billing/module0/cmp0
  const componentDestinationFile = `src/app/${args[2]}/${componentName}.component`;
  const templateDir = 'tools/generator/templates';
  const templateTypes = ['form', 'dashboard', 'table'];
  const copyFromTemplate = (destinationFile, templateName, fileType) => {
    destinationFile = `${destinationFile}.${fileType}`;

    let content = fs.readFileSync(
        `${templateDir}/${templateName}/component.${fileType}`, {encoding: 'utf-8'});

    content = content.replace(/__name__/g, componentName)
                  .replace(/__Feature__/g, humanize(featureName, true))
                  .replace(/__Name__/g, humanize(componentName, true));

    fs.writeFileSync(destinationFile, content);

    console.log('UPDATE', destinationFile, `(${templateName})`);
  };

  // run ng and generate the component
  await ng(args);

  // cycle through template directories (so the generation is stable)
  const templateName = templateTypes[cmpIdx % templateTypes.length];
  // copy template contents
  copyFromTemplate(componentDestinationFile, templateName, 'ts');
  copyFromTemplate(componentDestinationFile, templateName, 'spec.ts');
  copyFromTemplate(componentDestinationFile, templateName, 'scss');
  copyFromTemplate(componentDestinationFile, templateName, 'html');
};
