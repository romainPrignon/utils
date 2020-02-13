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

### Release

Example: Releasing a minor version following semver

```sh
npm run version:minor
npm run publish
```


## License

The code is available under the [MIT license](LICENSE.md).


# TODO
- memo types
- optional types
- Error
- skipped test
- better type lisibility (Fun,...)
- readfile: curry
- factory function as class (prototype ??)
- pass thougth all tslint, ts ignored error and either fix or relax (mutation ok in test ??)
