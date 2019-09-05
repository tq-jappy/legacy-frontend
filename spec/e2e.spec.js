const path = require('path');

describe('TODO app', () => {
  beforeEach(async () => {
    await page.goto('file://' + path.resolve(__dirname, '../index.html'));
  });

  it('初期表示', async () => {
    await page.waitForSelector('#todoList', { visible: false });
    await page.waitForSelector('#todoEmpty', { visible: true });
    await expect(page).toMatchElement('#todoEmpty', {
      text: 'タスクがありません'
    });
  });
});
