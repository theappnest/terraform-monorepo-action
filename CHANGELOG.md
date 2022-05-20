# Changelog

### [1.7.6](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.7.5...v1.7.6) (2022-05-20)


### Bug Fixes

* do not return empty strings as paths ([#140](https://www.github.com/theappnest/terraform-monorepo-action/issues/140)) ([f6fa676](https://www.github.com/theappnest/terraform-monorepo-action/commit/f6fa6769d400a77211cf2cb5758fb155789803e8))

### [1.7.5](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.7.4...v1.7.5) (2022-04-05)


### Bug Fixes

* ignore github ci and terraform directories ([#132](https://www.github.com/theappnest/terraform-monorepo-action/issues/132)) ([c8eaca6](https://www.github.com/theappnest/terraform-monorepo-action/commit/c8eaca688c1b8993926e0374cc738bc4a459f3d5))

### [1.7.4](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.7.3...v1.7.4) (2022-03-04)


### Bug Fixes

* make sure we pass along a relative file path ([#123](https://www.github.com/theappnest/terraform-monorepo-action/issues/123)) ([652fae3](https://www.github.com/theappnest/terraform-monorepo-action/commit/652fae3b122831af7f372e9d7ae30a83277baf65))

### [1.7.3](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.7.2...v1.7.3) (2022-03-04)


### Bug Fixes

* resolve path gathering for templated files ([#119](https://www.github.com/theappnest/terraform-monorepo-action/issues/119)) ([d0776ee](https://www.github.com/theappnest/terraform-monorepo-action/commit/d0776ee14699f0fe94579b5c9ba62be02d0476c4))

### [1.7.2](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.7.1...v1.7.2) (2022-02-01)


### Bug Fixes

* cant use .split on non string ([5837281](https://www.github.com/theappnest/terraform-monorepo-action/commit/583728176bc784a7c7ef9f4a8d0fc11fd70234be))
* cant use .split on non string ([#111](https://www.github.com/theappnest/terraform-monorepo-action/issues/111)) ([0430e24](https://www.github.com/theappnest/terraform-monorepo-action/commit/0430e24ec2e51d91c292ed4f6f6dc78c091e9d71))

### [1.7.1](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.7.0...v1.7.1) (2022-02-01)


### Bug Fixes

* return path before yaml or tpl to get changed module ([#109](https://www.github.com/theappnest/terraform-monorepo-action/issues/109)) ([db3a026](https://www.github.com/theappnest/terraform-monorepo-action/commit/db3a026dde31107e68c3ee7baeaba21670595243))

## [1.7.0](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.6.0...v1.7.0) (2022-02-01)


### Features

* support file paths with .yaml and .tpl extensions ([#96](https://www.github.com/theappnest/terraform-monorepo-action/issues/96)) ([8811efa](https://www.github.com/theappnest/terraform-monorepo-action/commit/8811efa10ba6a991384756d97011e14afc33db07))

## [1.6.0](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.5.0...v1.6.0) (2021-08-20)


### Features

* support pull_request_target ([#43](https://www.github.com/theappnest/terraform-monorepo-action/issues/43)) ([7361ffd](https://www.github.com/theappnest/terraform-monorepo-action/commit/7361ffdd1447c54b0f2229c7bb13cfea773fa3cc))

## [1.5.0](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.4.1...v1.5.0) (2021-08-18)


### Features

* return modules where lock file changed ([#40](https://www.github.com/theappnest/terraform-monorepo-action/issues/40)) ([1b38d4a](https://www.github.com/theappnest/terraform-monorepo-action/commit/1b38d4a388349919c6054662f118f41cf1f5e8b1))

### [1.4.1](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.4.0...v1.4.1) (2021-08-12)


### Bug Fixes

* fails on diverged head ([#31](https://www.github.com/theappnest/terraform-monorepo-action/issues/31)) ([eb4827e](https://www.github.com/theappnest/terraform-monorepo-action/commit/eb4827ea51420615a63ac042282400013b3d09b1))
* get ref on workflow_dispatch ([#33](https://www.github.com/theappnest/terraform-monorepo-action/issues/33)) ([b8a642e](https://www.github.com/theappnest/terraform-monorepo-action/commit/b8a642e612eb015d8c5cefcedf664cf1f75bf1ed))

## [1.4.0](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.3.0...v1.4.0) (2021-08-06)


### Features

* support workflow dispatch event ([#26](https://www.github.com/theappnest/terraform-monorepo-action/issues/26)) ([6c9ee72](https://www.github.com/theappnest/terraform-monorepo-action/commit/6c9ee7211dc8909af881f9224166124bd6a072af))

## [1.3.0](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.2.0...v1.3.0) (2021-08-03)


### Features

* improved ignore ([#19](https://www.github.com/theappnest/terraform-monorepo-action/issues/19)) ([3a206a1](https://www.github.com/theappnest/terraform-monorepo-action/commit/3a206a127a673d027e7e694eab0220e2ba3ce226))

## [1.2.0](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.1.1...v1.2.0) (2021-08-02)


### Features

* support ignore/include modules ([#12](https://www.github.com/theappnest/terraform-monorepo-action/issues/12)) ([c6a2069](https://www.github.com/theappnest/terraform-monorepo-action/commit/c6a2069b772bd9b2461e5bfa0d553665591cb7f1))

### [1.1.1](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.1.0...v1.1.1) (2021-07-30)


### Bug Fixes

* get trees recursively ([#10](https://www.github.com/theappnest/terraform-monorepo-action/issues/10)) ([3489534](https://www.github.com/theappnest/terraform-monorepo-action/commit/348953440f7d08fc82e227febb9890cee8e7ab0c))

## [1.1.0](https://www.github.com/theappnest/terraform-monorepo-action/compare/v1.0.0...v1.1.0) (2021-07-30)


### Features

* exclude deleted modules ([#7](https://www.github.com/theappnest/terraform-monorepo-action/issues/7)) ([455c420](https://www.github.com/theappnest/terraform-monorepo-action/commit/455c4209d4b2b064bc824f5776a1cd800f8c9e7a))

## 1.0.0 (2021-07-28)


### Features

* create action ([#1](https://www.github.com/theappnest/terraform-monorepo-action/issues/1)) ([574973e](https://www.github.com/theappnest/terraform-monorepo-action/commit/574973edb1adb16e0a1c61af32cc686ce0b9c590))
