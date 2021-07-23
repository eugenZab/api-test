const Mocha = require('mocha');
const path = require('path');
const fs = require('fs');

const testDir = path.join(__dirname, './test');

const env = require('./env.js');


/**
 * Gets the test .js file paths recursively from a given directory.
 * @param {String} dir - path to directory containing test files.
 * @param fileList
 * @returns {Array} Filepaths to each test .js file.
 */
function getTestPaths(dir, fileList) {
    const files = fs.readdirSync(dir);
    // eslint-disable-next-line no-param-reassign
    fileList = fileList || [];

    files.forEach((file) => {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            // eslint-disable-next-line no-param-reassign
            fileList = getTestPaths(path.join(dir, file), fileList);
        } else {
            fileList.push(path.join(dir, file));
        }
    });

    return fileList.filter((file) => {
        return path.extname(file) === '.js';
    });
}

const mochaRunner = new Mocha({
    reporter: 'mochawesome',
    timeout: 250000
});

// run tests
try {
    // Get all .js paths and add each file to the mocha instance.
    getTestPaths(testDir).forEach((file) => {
        mochaRunner.addFile(
            path.join(file)
        );
    });
    mochaRunner.run((failures) => {
        return process.on('exit', () => {
            return process.exit(failures);
        });
    })
        .on('suite', (suite) => {
        })
        .on('pass', (test) => {
        })
        .on('pending', (test) => {
        })
        .on('fail', (test, err) => {
        })
        .on('end', async () => {
        });
} catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Test suite doesn't exists or set. Error: ${err}`);
}
