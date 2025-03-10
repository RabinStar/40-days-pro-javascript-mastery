# **Lesson Plan Day-01 of 40 Days: Introduction to JavaScript**

---

## **1. What is JavaScript, and Why Should You Learn It?**
- **Definition**: JavaScript is a lightweight, interpreted programming language used to make web pages interactive and dynamic.
- **Why Learn It?**
  - Core technology for web development.
  - Works on both client-side (browser) and server-side (Node.js).
  - High demand in the job market.
  - Large ecosystem with frameworks like React, Angular, and Vue.js.

---

## **2. Setting Up Your Development Environment**
- **Tools Needed**:
  1. **VS Code**: A lightweight, powerful code editor.
     - Download and install from [code.visualstudio.com](https://code.visualstudio.com/).
  2. **Browser**: Chrome or Firefox for testing and debugging.
  3. **Node.js**: For running JavaScript outside the browser.
     - Download and install from [nodejs.org](https://nodejs.org/).
- **Steps**:
  - Install VS Code and add extensions like **Live Server** and **Prettier**.
  - Install Node.js and verify installation using `node -v` and `npm -v` in the terminal.

---

## **3. Writing and Running Your First JavaScript Code**
- **Steps**:
  1. Open VS Code and create a file named `index.html`.
  2. Add the following code:
     ```html
     <!DOCTYPE html>
     <html>
     <head>
         <title>My First JavaScript</title>
     </head>
     <body>
         <h1>Hello, JavaScript!</h1>
         <script>
             console.log("Hello, This is First Js code!");
         </script>
     </body>
     </html>
     ```
  3. Open the file in a browser and check the console (right-click > Inspect > Console) to see the output.

---

## **4. Loading JavaScript in Different Ways**
- **Inline Script**: Directly inside the `<script>` tag (as shown above).
- **External Script**: Using the `src` attribute.
  ```html
  <script src="eXtScript.js"></script>

- **Async**: Loads the script asynchronously without blocking the HTML parsing.
    ```html
    <script async src="aSyncScript.js" ></script>


- **Defer**: Loads the script after HTML parsing is complete.
    ```html
    <script defer src="deFerScript.js" ></script>

**Happy Coding!!!**: By Al-Amin