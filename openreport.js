const marge = require('mochawesome-report-generator');
const merge = require('mochawesome-merge');
const open = require('open');
const path = require('path');

(async () => {
  try {
    // Merge mochawesome JSON reports into one
    const reportJSON = await merge({ files: ['./reports/*.json'] });

    // Generate HTML report
    const reportPath = await marge.create(reportJSON, {
      reportDir: './reports',
      reportFilename: 'report',
      inlineAssets: true
    });

    // Open the HTML report in default browser
    await open(reportPath);
    console.log('Report opened in default browser!');
  } catch (err) {
    console.error('Failed to generate/open report:', err);
  }
})();
