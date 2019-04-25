import { configure, storiesOf } from '@storybook/html';
import Twig from 'twig';
var twig = Twig.twig;       // Render function

function loadStories() {
  const req = require.context('../src/views/components', true, /\.stories\.js$/);
  req.keys().forEach((filename) => {
    var r = req(filename)
    var template = r.template;
    var data = r.data;

    var folder = filename.split('/')[1];
    require(`../src/components/${folder}/${template}`);
    var templatePath = `src/components/${folder}/${template}`;

    storiesOf('Components', module)
      .add(folder, () => renderTemplate(templatePath, data))
  });

  const renderTemplate = (templatePath, data) => {
    var template = twig({
      path: templatePath,
      async: false
    });
    return (
      template.render(data)
    );
  }
}
configure(loadStories, module);

