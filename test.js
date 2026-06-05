const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    
    await page.goto('https://lasusu-dlibe.github.io/digital-portfolio/');
    
    // wait for load
    await page.waitForTimeout(2000);
    
    // click Projects menu
    await page.click('button[data-target="projects"]');
    await page.waitForTimeout(1000);
    
    // click project 02 detail
    // In projects view, it calls loadProjectDetail('02')
    await page.evaluate(() => {
        window.loadProjectDetail('02');
    });
    
    await page.waitForTimeout(3000); // wait for docx to load
    
    await page.screenshot({path: 'screenshot.png'});
    
    // get innerHTML of the docx container
    const docxHtml = await page.evaluate(() => {
        const el = document.getElementById('docx-container-02');
        return el ? el.innerHTML.substring(0, 500) : 'not found';
    });
    
    console.log('DOCX HTML:', docxHtml);
    
    await browser.close();
})();
