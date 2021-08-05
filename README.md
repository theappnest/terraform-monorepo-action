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
        with:
          ignore: |
            */*
            !modules/**
            modules/ignored/*
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
- `ignore` (optional) List of module path globs to ignore. Uses gitignore spec.

## Outputs

- `modules` An array of paths to Terraform modules.
