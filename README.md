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
import {native, fp} from '@romainprignon/utils'
import * as native from '@romainprignon/utils/native'
import {fs} from '@romainprignon/utils/native'
import {readFile} from '@romainprignon/utils/fp/fs'
```

See [dist/index.d.ts](dist/index.d.ts)


## Contribute

See [package.json](package.json) scripts section

### Principles
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
npm run version:minor
npm run deploy
```


## License

The code is available under the [MIT license](LICENSE.md).
