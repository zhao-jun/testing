const {expect} = require('chai');
const {Builder, By} = require('selenium-webdriver')
const chromeDriver = require('selenium-webdriver/chrome');


// selenium-webdriver，须单独下载相应的浏览器驱动
describe('百度UI测试', function () {
  // 此处有this，所以上面不能用箭头函数
  // 关闭超时
  this.timeout(0);

  let driver

  before(() => {
    driver = new Builder().forBrowser('chrome')
    .setChromeOptions(new chromeDriver.Options().addArguments(['headless']))
    .build()
  })

  // it('should have title "百度一下，你就知道"', done => {
  //   driver.get('http://www.baidu.com').then(() => {
  //     driver.getTitle().then(title => {
  //       expect(title).to.equal('百度一下，你就知道');
  //       done()
  //     })
  //   })
  // })

  // 不用done,执行到最后就结束
  it('should have title "百度一下，你就知道"', async () => {
    await driver.get('http://www.baidu.com');
    let title = await driver.getTitle();
    expect(title).to.equal('百度一下，你就知道');
  })

  it('should have button value "百度一下"', async () => {
    let button = await driver.findElement(By.id('su'));
    let value = await button.getAttribute('value');
    expect(value).to.equal('百度一下');
  })

  it('搜索 test', async () => {
    let input = await driver.findElement(By.id('kw'));
    await input.sendKeys('test');
    let button = await driver.findElement(By.id('su'));
    await button.click()
    const handler = await driver.getWindowHandle();
    driver.switchTo().window(handler);
    await driver.sleep(3000)
    let title = await driver.getTitle();
    expect(title).to.equal('test_百度搜索');
  })

  after(() => {
    driver.quit()
  })

})
