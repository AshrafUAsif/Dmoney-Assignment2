const newman = require('newman');

newman.run({
    collection: 'https://api.postman.com/collections/29168443-c95c0bd2-6570-4ed4-8704-c12775bfebf3?access_key=PMAT-01H8YMNVDNBXRTETTTQFMTMTS5', 
    // environment: require('./collection/customer_api_env.json'),
    iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
    
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});