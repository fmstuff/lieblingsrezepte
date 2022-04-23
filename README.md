<div id="top"></div><!-- for back-linking to the top of the README -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/fmstuff/lieblingsrezepte">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Lieblingsrezepte</h3>

  <p align="center">
    11ty based website for some of my favorite recipes
    <br />
    <br />
    <!-- TODO: link to actual website once deployed -->
    <a href="https://github.com/fmstuff/lieblingsrezepte">View the Website</a>
    ·
    <a href="https://github.com/fmstuff/lieblingsrezepte/issues">Report Bug</a>
    ·
    <a href="https://github.com/fmstuff/lieblingsrezepte/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#serve-lieblingsrezepte-locally">Serve lieblingsrezepte locally</a></li>
        <li><a href="#build-lieblingsrezepte">Build lieblingsrezepte</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- TODO: link to actual website once deployed -->
[![Product Name Screen Shot][product-screenshot]](https://github.com/fmstuff/lieblingsrezepte)

Over the years my wife and I have been writing down recipes that we liked and
loved to cook. Often we had done some slight alterations and/or simplifications
to the original recipes (we like it simple 😉).  
Once done and ready to be served, we took a picture and jotted down the list of
ingredients and instructions to a note-taking app.

Around spring 2022 I felt like it would be a fun project to create a little
website/blog to provide a new "home" to our collected recipes and thereby also
share them with the rest of the world 🍽

> And also I was curious to get into [11ty][eleventy-url] for generating the site from Markdown files 😁

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [11ty][eleventy-url]
* [Alpine.js][alpine-js-url]
* [Bulma][bulma-url] 

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get the website up and running locally (for writing more content) follow
these steps.

### Prerequisites

The following list of tools you need to have installed on your machine:

* Node.js (v16), see: https://nodejs.org
* npm
  ```sh
  $ npm install npm@latest -g
  ```
* yarn
  ```sh
  $ npm install --global yarn
  ```

### Installation

1. Clone the repo
   ```sh
   $ git clone git@github.com:fmstuff/lieblingsrezepte.git
   ```
2. Install NPM packages
   ```sh
   $ yarn install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



## Usage

### Serve lieblingsrezepte locally
To run 11ty locally and serve the website on `localhost:8080` run:
```sh
$ yarn dev
```

Most useful for when writing new content or working on the website's styles.

### Build lieblingsrezepte
To build a static version of lieblingsrezepte run:
```sh
$ yarn build
```

### Deploy lieblingsrezepte
_Coming soon..._


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* My wife, Julia, for all the love, joy & fun when cooking together, and the
  relentless thirst for new dishes ❤️
* [Ethan Chlebowski](https://www.youtube.com/c/CookwithE) for some amazing inspiration! 🍽


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/fmstuff/lieblingsrezepte.svg?style=for-the-badge
[contributors-url]: https://github.com/fmstuff/lieblingsrezepte/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/fmstuff/lieblingsrezepte.svg?style=for-the-badge
[forks-url]: https://github.com/fmstuff/lieblingsrezepte/network/members
[stars-shield]: https://img.shields.io/github/stars/fmstuff/lieblingsrezepte.svg?style=for-the-badge
[stars-url]: https://github.com/fmstuff/lieblingsrezepte/stargazers
[issues-shield]: https://img.shields.io/github/issues/fmstuff/lieblingsrezepte.svg?style=for-the-badge
[issues-url]: https://github.com/fmstuff/lieblingsrezepte/issues
[license-shield]: https://img.shields.io/github/license/fmstuff/lieblingsrezepte.svg?style=for-the-badge
[license-url]: https://github.com/fmstuff/lieblingsrezepte/blob/main/LICENSE.txt
[eleventy-url]: https://www.11ty.dev/
[product-screenshot]: ./images/project_screenshot.png
[alpine-js-url]: https://alpinejs.dev/
[bulma-url]: https://bulma.io/
