const phantomcss = require('phantomcss');

casper.test.begin('Calculator Visual Tests', function () {

    phantomcss.init( {
        rebase: casper.cli.get('rebase')
    } );

    // Initialize URL
    casper.start( 'https://calculator-demo-238014.appspot.com' );
    // Establish resolution
    casper.viewport( 1024, 768 );

    // Test
    casper.then( function () {
    });

    casper.then( function() {
        // compare screenshots
        phantomcss.compareAll();
    });


    casper.run( function () {
        casper.test.done();
    } );
} );