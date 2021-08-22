# @romainprignon/utils

> Some useful utils


## Setup

```sh
npm install --save @romainprignon/utils
```


## API

Way to import utils
```js
import * as utils from '@romainprignon/utils'
import {oop, fp} from '@romainprignon/utils'
import * as oop from '@romainprignon/utils/oop'
import {fs} from '@romainprignon/utils/oop'
import {readFile} from '@romainprignon/utils/fp/fs'
```

See [dist/index.d.ts](dist/index.d.ts)


## Contribute

See [package.json](package.json) scripts section

### Principles
- import dir instead of file. Easier in case of renaming
```js
import { may } from '../functions/may' // bad
import { may } from '../functions' // good
```
- keep standard function signature as much as possible
- prefer type over defensive programming
```js
(path: string, encoding?: string) => Buffer.isEncoding(encoding) // bad
```
```js
(path: string, encoding?: Encoding) => ... // good
```

### Release

Example: Releasing a minor version using semver

```sh
npm run ci:publish:minor
```


## License

The code is available under the [MIT license](LICENSE.md).
