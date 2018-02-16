# async-wait-box

<a href="https://www.patreon.com/bePatron?u=8663953"><img alt="become a patron" src="https://c5.patreon.com/external/logo/become_a_patron_button.png" height="35px"></a>

Examples to show techniques to archieve particular tasks via `async/await`.

Ordered by level of complexity.

## Quick `async/await` Overview

`async` marks a function as asynchronous, the function will always return a Promise, resolving
with the return value. `await` handles Promises inside the async function, making the
function’s inner logic synchronous.

`async/await` only blocks execution of that function, however other functions can still execute
while it is waiting. Thus developers still can leverage Node.js concurrency.

## Getting Started

To ensure all dependencies are installed run the below after cloning the repo.

```
npm install
```

## Usage

Run each example directly i.e. `node 01-basics.js` and edit to your delight and observe what
changed.

### Debugging

To see how promises get executed/resolved/rejected under the hood run with the `DEBUG=task` env
var, i.e.:

```
DEBUG=task node 01-basics.js`.
```

To run an example in your browser run it with the included [budo](https://github.com/mattdesl/budo),
i.e.:

```
npm run budo -- 01-basics.js
```

This allows you to add breakpoints, observe stack traces, etc. to understand how things work
under the hood and also to convince yourself that `async/await` code is easily debuggable.

# LICENSE

MIT
