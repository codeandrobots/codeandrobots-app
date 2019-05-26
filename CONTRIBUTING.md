# Contributing to Code & Robots

For **help**, **support**, **questions** and **ideas** please visit **[our FAQ](http://www.codeandrobots.com/faq.html)** 🚑.

---

## Where to Start

If you're a developer looking to contribute, check out the [help wanted](https://github.com/codeandrobots/codeandrobots-app/labels/help%20wanted) label encompassing issues which need some love or [drop us an email](mailto:codeandrobotshq@gmail.com?subject=Hi&body=I%20would%20like%20to%20help) and we'll help you get started.

If you've got an idea for a new feature, please email us your suggestions at [codeandrobotshq@gmail.com](mailto:codeandrobotshq@gmail.com?subject=Idea), as adding new features requires generating consensus first.

### Branching Guide

`master` on the main repository always contains the latest changes. This means that it is WIP for the next minor version and should NOT be considered stable. Stable versions are tagged using [semantic versioning](http://semver.org/).

On your local repository, you should always work on a branch to make keeping up-to-date and submitting pull requests easier, but in most cases you should submit your pull requests to `master`. Where necessary, for example if multiple people are contributing on a large feature, we make use of feature branches.

#### Branch structure

- **master** Every stable feature or fix goes to `master`
- **feature/id-xxx** You're working on an issue and this is your feature branch, see this [example feature/1-hide-beta-feature-ios branch](https://github.com/codeandrobots/codeandrobots-app/tree/feature/1-hide-beta-feature-ios)
- **fix/id-xxx** Fixing an issue, e.g. `fix/2-ble-discovery`
- **test/id-xxx** This is an unstable / experimental branch, e.g. `test/3-wifi-support`
- **refactor/id-xxx** For refactoring purposes, e.g. `refactor\4-bluetooth-service-refactor`

### Commit Messages

We have a handful of simple standards for commit messages which help us to generate readable changelogs. Please follow this wherever possible and mention the associated issue number.

- **1st line:** Max 80 character summary written in past tense
- **2nd line:** [Always blank]
- **3rd line:** `refs #000` or `closes #000` or `no issue`
- **4th line:** Whatever you want. Any extra details can be included from here

Good commit message examples: [one](https://github.com/codeandrobots/codeandrobots-app/commit/9f26ac76a1dc53b1119718a987fee0ee51d3ae7f), [two](https://github.com/codeandrobots/codeandrobots-app/commit/0f795fa2831eef286364215403d6264efe702859) and [three](https://github.com/codeandrobots/codeandrobots-app/commit/e63bc34dfce4e3e3818bdd2b4cc38931c91bffb4).

### Submitting Pull Requests

We aim to merge any straightforward, well-understood bug fixes or improvements immediately, as long as they pass our tests (run `yarn test` to check locally). We generally don’t merge new features and larger changes without prior discussion with the core product team for tech/design specification.

Please provide plenty of context and reasoning around your changes, to help us merge quickly. Closing an already open issue is our preferred workflow. If your PR gets out of date, we may ask you to rebase as you are more familiar with your changes than we will be.

---

## Contributor License Agreement

By contributing your code to Code & Robots you grant Code & Robots a non-exclusive, irrevocable, worldwide, royalty-free, sublicenseable, transferable license under all of Your relevant intellectual property rights (including copyright, patent, and any other rights), to use, copy, prepare derivative works of, distribute and publicly perform and display the Contributions on any licensing terms, including without limitation:
(a) open source licenses like the MIT license; and (b) binary, proprietary, or commercial licenses. Except for the licenses granted herein, You reserve all right, title, and interest in and to the Contribution.

You confirm that you are able to grant us these rights. You represent that You are legally entitled to grant the above license. If Your employer has rights to intellectual property that You create, You represent that You have received permission to make the Contributions on behalf of that employer, or that Your employer has waived such rights for the Contributions.

You represent that the Contributions are Your original works of authorship, and to Your knowledge, no other person claims, or has the right to claim, any right in any invention or patent related to the Contributions. You also represent that You are not legally obligated, whether by entering into an agreement or otherwise, in any way that conflicts with the terms of this license.

Code & Robots acknowledges that, except as explicitly described in this Agreement, any Contribution which you provide is on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OR CONDITIONS OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE.
