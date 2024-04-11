document.write(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Potta+One&family=Roboto:wght@100&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="prism.css" />
    <script src="prism.js"></script>
    <link rel="stylesheet" href="style.css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Cheatsheet</title>
  </head>
    <div class="flex flex-col items-center">
<header class="text-gray-600 body-font w-full">
        <div
          class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
        >
          <a
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <span class="logo h-16 w-16 flex justify-center items-center"
              ><img src="copy.svg" alt="logo"
            /></span>
            <span class="ml-3 text-xl">QuickBytesGuide</span>
          </a>
          <nav
            class="md:ml-auto flex flex-wrap items-center text-base justify-center"
          >
            <a class="mr-5 hover:text-gray-900" href="react.html">React</a>
            <a class="mr-5 hover:text-gray-900" href="react-native.html">React Native</a>
            <a class="mr-5 hover:text-gray-900" href="node.html">Node.js</a>
            <a class="mr-5 hover:text-gray-900" href="mongodb.html">MongoDB</a>
          </nav>
        </div>
      </header>
`);
