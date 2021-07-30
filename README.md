# terraform-monorepo-action

This GitHub action returns an array of paths to Terraform modules.

## Usage

```yaml
jobs:
  modules:
    runs-on: ubuntu-latest
    steps:
      - uses: theappnest/terraform-monorepo-action@master
        id: modules
    outputs:
      modules: ${{ steps.modules.outputs.modules }}

  terraform:
    runs-on: ubuntu-latest
    needs: modules
    strategy:
      matrix:
        module: ${{ fromJson(needs.modules.outputs.modules) }}
    defaults:
      run:
        working-directory: ${{ matrix.module }}
    steps:
      - uses: actions/checkout@v2
      - uses: hashicorp/setup-terraform@v1
      - run: terraform init
      - run: terraform plan
```

## Inputs

- `token` (optional) GitHub token. Defaults to secrets.GITHUB_TOKEN.
- `mode` (optional) Set to `all` to return all modules or `changed` to only return modules that have changes in this PR/commit. Defaults to `changed`.
- `ignore` (optional) Comma-separated list of module paths to ignore.
- `include` (optional) Comma-separated list of module paths to include. If set all other modules are ignored.

## Outputs

- `modules` An array of paths to Terraform modules.
