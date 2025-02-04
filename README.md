# Node.js Server Freeze - Blocking Event Loop

This repository demonstrates a common Node.js issue where a long-running synchronous operation in a request handler blocks the event loop, causing the server to freeze and become unresponsive.  The solution showcases how to use asynchronous programming to prevent this.

## Bug
The `bug.js` file contains a simple Express.js server with a request handler that performs a computationally expensive synchronous operation.  This blocks the event loop, preventing the server from responding to further requests.

## Solution
The `bugSolution.js` file demonstrates the solution using asynchronous operations.  By using asynchronous functions or utilizing techniques like worker threads, the event loop remains unblocked, allowing the server to continue handling requests concurrently.