# express-throwandtell

This is middleware for ExpressJS 3.x. to report errors to ThrowAndTell when next(err) is called in express.

## Installation

`npm install express-throwandtell`

## Usage

1. Add the middleware to Express

    ```javascript
    app.configure(function(){
      // ...
      app.use(app.router);
      app.use(express['static'](path.join(__dirname, 'public')));
      // The following line is the line you should add (AFTER any other).
      app.use(require('express-throwandtell')('ACCESS_KEY_HERE_OR_THROWANDTELL_OPTIONS_CONFIG'));
    });
    ```
2. Your Done: Throw and Error!
    ```javascript
    app.get('/', function(req, res, next) {
      next(new Error('Here\'s an Error!'));
    });
    // Now hit / to test.
    ```

## Licence

(The MIT Licence)

Copyright (c) 2012 Ben Evans <ben@bensbit.co.uk>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
