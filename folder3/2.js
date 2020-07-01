function my_function(data, result) {
    const path = require('path')
    const filename = path.basename(__dirname) + path.sep + path.basename(__filename)
    const timeout = Math.round(Math.random() * 1000)
    const sleep = require('system-sleep'); // to emulate heavy logic (setTimeout will not delay the function execution)

    result = data + result // doing something

    sleep(timeout)

    console.log(filename + ' executed in ' + timeout + ' ms')

    return result
}

module.exports = my_function