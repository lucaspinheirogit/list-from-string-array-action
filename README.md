# GitHub Action to create a string list from an array of strings

This action is as simple as it sounds.

## Inputs

#### stringArray

_Required_  - `string []` - An array of strings.
Example:
`['file1.js', 'file2.js', 'file3.js']` 

## Outputs

#### stringList

steps.modified_files_list.stringList - `string` - A list of strings
Example: 
```
- file1.js
- file2.js
- file3.js
```

### Usage

This is an example showing a real use case for this action: creating a list of modified files in a commit.

### Example:

```yaml
name: Print Modified Files

on:
  push:
    branches:
    - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Get modified files
        id: modified_files
        uses: trilom/file-changes-action@v1.0.0
        with:
          githubToken: ${{ secrets.GITHUB_TOKEN }}
    - name: Create list of modified files
        id: modified_files_list
        uses: lucaspinheirogit/list-from-string-array-action@v1.3
        with:
          stringArray: '${{ steps.modified_files.outputs.files_modified }}'
    - name: Print modified files
      run: echo "The time was ${{ steps.modified_files_list.stringList }}"
```

| Key | Value | Type | Required | Default |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| `stringArray` | Your array of strings | `array[]` | **Yes** | N/A |

