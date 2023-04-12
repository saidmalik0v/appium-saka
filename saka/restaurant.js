describe('girgitton', function () {
      it('rasta restaurant', async function () {
        await browser.pause(6000)

        await $('//android.view.View[@content-desc="Русский"]').click()    //language
        await browser.pause(2000)

        driver.touchPerform([
          { action: 'press', options: { x: 670, y: 120 }},    //prod>test
          { action: 'wait', options: { ms: 5000 }},
          { action: 'release' }
        ]);
        await browser.pause(2000)

        await $('//android.widget.EditText[@text="+998 "]').addValue('37 777 77 77')   //branch phone number
        await browser.pause(2000)

        await $('//android.widget.ImageView[@content-desc="Продолжить"]').click()   //click proceed
        await browser.pause(2000)

        await $('//android.widget.EditText[@index="2"]').addValue("454545")   //kod podtverjdeniya
        await browser.pause(2000)

        await $('//android.widget.ImageView[@content-desc="Продолжить"]').click()   //click proceed
        await browser.pause(3000)

        driver.touchAction([
          {action: 'press', x: 355, y: 1207},
          {action: 'moveTo', x: 345, y: 455},
          'release'
        ]);
        await browser.pause(3000)

        


    })
  }
)