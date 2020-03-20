<h1 align="center">List from string array Action</h1>

<p align="center">
  Turn a string array into a string list
</p>

### Example

INPUT:
```
  ['orange', 'apple', 'banana']
```

OUTPUT:
```
  - orange
  - apple
  - banana
```

### Usage 

```yaml
name: My Workflow

on:
  push:
    branches:
    - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@master
    - name: Create list from array
        id: list
        uses: lucaspinheirogit/list-from-string-array-action@v1.3
        with:
          stringArray: '['orange', 'apple', 'banana']'
```

# list-from-string-array-action
