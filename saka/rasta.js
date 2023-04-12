function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

describe('girgitton', function () {
      it('rasta', async function () {
        await browser.pause(6000);
        await $('//android.widget.Button[@content-desc="Davom etish"]').click()  //intro page 1
        await $('//android.widget.Button[@content-desc="Davom etish"]').click()  //intro page 2
        await $('//android.view.View[@content-desc="Русский"]').click() //select language

        driver.touchPerform([    //prod>test
          { action: 'press', options: { x: 670, y: 120 }},
          { action: 'wait', options: { ms: 5000 }},
          { action: 'release' }
        ]);
        await browser.pause(2000)
        
 
        await $('//android.widget.EditText[@text="+998 "]').addValue("18 "+randomInteger(100, 999)+" 08 05") //user number
        await browser.pause(2000)

        await $('//android.widget.ImageView[@content-desc="Продолжить"]').click()   // proceed
        await browser.pause(2000)

        await $('//android.widget.EditText[@text="Имя"]').click()
        await $('//android.widget.EditText[@text="Имя"]').addValue("Muhammad")  //user name
        await browser.pause(2000)

        await $('//android.widget.ImageView[@content-desc="Подтвердить"]').click()
        await browser.pause(4000)

        await $('//android.widget.EditText[@index="2"]').addValue("454545") //kod podtverjdeniya
        await browser.pause(2000)

        await $('//android.widget.Button[@text="Разрешить только во время использования приложения"]').click() //on location
        await browser.pause(3000)

        driver.touchPerform([    // change adress popup
          { action: 'press', options: { x: 353, y: 1320 }},
          { action: 'release' }
        ]);
        await browser.pause(3000)

        await $('//android.widget.ImageView[@content-desc="Добавить новый адрес"]').click()  //add new adress
        await browser.pause(5000)

        await $('//android.widget.Button[@content-desc="Подтвердить"]').click() //add new adress
        await browser.pause(2000)

        await $('//android.widget.EditText[@text="Название адреса: Например, дом"]').click()
        await $('//android.widget.EditText[@text="Название адреса: Например, дом"]').addValue("sakapower")  //adress name
        await browser.pause(2000)

        await $('//android.widget.Button[@content-desc="Подтвердить"]').click() //confirm adress
        await browser.pause(2000)

        driver.touchPerform([    // go to search page
          { action: 'press', options: { x: 267, y: 1380 }},
          { action: 'release' }
        ]);
        await browser.pause(5000)
        
        await $('//android.widget.ImageView[@content-desc="Tash"]').click()  //filter restaurants
        await browser.pause(5000)

        driver.touchPerform([    // go to restaurant
          { action: 'press', options: { x: 353, y: 846 }},
          { action: 'release' }
        ]);
        await browser.pause(5000)

        driver.touchPerform([    // go to product page
          { action: 'press', options: { x: 347, y: 1221 }},
          { action: 'release' }
        ]);
        await browser.pause(3000)
        
        driver.touchPerform([    // add product
          { action: 'press', options: { x: 477, y: 1354 }},
          { action: 'release' }
        ]);
        await browser.pause(2000)

        driver.touchPerform([    // make an order
          { action: 'press', options: { x: 361, y: 1338 }},
          { action: 'release' }
        ]);
        await browser.pause(2000)

        driver.touchPerform([    // proceed
          { action: 'press', options: { x: 359, y: 1322 }},
          { action: 'release' }
        ]);
        await browser.pause(5000)

        driver.touchPerform([    // end order create
          { action: 'press', options: { x: 361, y: 1356 }},
          { action: 'release' }
        ]);
        await browser.pause(10000)

        await $('//android.widget.ImageView[@content-desc="Tash"]').click()  //filter restaurants
        await browser.pause(5000)

        driver.touchPerform([    // go to restaurant
          { action: 'press', options: { x: 353, y: 846 }},
          { action: 'release' }
        ]);
        await browser.pause(7000)

        driver.touchPerform([    // add in favourite 
          { action: 'press', options: { x: 540, y: 120 }},
          { action: 'release' }
        ]);
        await browser.pause(3000)

        driver.touchPerform([    // back  
          { action: 'press', options: { x: 90, y: 120 }},
          { action: 'release' }
        ]);
        await browser.pause(3000)

        driver.touchPerform([    // go to profile 
          { action: 'press', options: { x: 628, y: 1372 }},
          { action: 'release' }
        ]);
        await browser.pause(3000)

        await $('//android.view.View[@content-desc="Любимые рестораны"]').click()  //go to favourite restaurants
        await browser.pause(7000)

        driver.touchPerform([    // back  
          { action: 'press', options: { x: 90, y: 120 }},
          { action: 'release' }
        ]);
        await browser.pause(3000)
        

    
        })
    }
  )