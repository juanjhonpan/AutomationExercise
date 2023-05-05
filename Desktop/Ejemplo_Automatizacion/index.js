const puppeteer = require('puppeteer');

(async()=>{
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();

    await page.goto('https://trello.com/b/QvHVksDa/personal-work-goals');
    await page.screenshot({ path: 'trello1.jpg' })
    
    const ejer = await page.$$eval('.js-card-name', allejer => allejer.map((val)=> val.textContent.trim()))
    
    console.log(ejer)

    await page.goto('https://todoist.com/auth/login');
    await page.screenshot({ path: 'todoist1.jpg' })

    await page.type('#element-0','pruebas.primera1@gmail.com')
    await page.screenshot({ path: 'todoist2.jpg' })

    await page.type('#element-3','Pruebas123')
    await page.screenshot({ path: 'todoist3.jpg' })
    await page.keyboard.press('Enter');
    await page.waitForSelector('[class=task_list_item__content]')

    await page.waitForSelector('[id=quick_add_task_holder]')
   
    let contenedor = ejer [0];  
    for(var i=0;i<5;i++){
        await page.waitForTimeout(1000);
        await page.keyboard.press('KeyQ');
        await page.waitForTimeout(1000);
        await page.type('.ProseMirror',contenedor)
        await page.waitForTimeout(1000);
        await page.keyboard.press('Enter');
        contenedor = ejer [i+1];
        console.log(contenedor)
        await page.waitForTimeout(1000);
        
    }
    await browser.close();
    
})();