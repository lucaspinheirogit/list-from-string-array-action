# GitHub Action to create a list from an array of strings

This action is as simple as it sounds.

## Inputs

| Key | Description | Type | Required | Example |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| `stringArray` | Your array of strings | `array[]` | **Yes** |`['file1.js', 'file2.js', 'file3.js']`  |

## Outputs

| Key | Description | Type |  Example |
| ------------- | ------------- | ------------- | ------------- |
| `stringList` | Your string list | `string` |```- file1.js``` <br>```- file2.js```<br>```- file3.js```|

### Usage

create YML file

### Example:

This example prints a list of modified files in a commit.
> But, you can improve this workflow by sending a message to your slack's workspace notifying that someone created/modified a database migration file. BTW, I created this action to help with that :smile:

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
      run: echo "Modified files: ${{ steps.modified_files_list.stringList }}"
```

