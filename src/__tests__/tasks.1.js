const fs = require('fs').promises;

describe('Component', () => {
  test('Tag notation used to include `PrintHello` Component', async () => {
    const data = await fs.readFile(__dirname+'/../index.js', 'utf8');
    expect(data).toMatch(/ReactDOM\.render\(.*\<PrintHello\s*\/\>.*\)\)/gm);
  })
})
