/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Kabar Terkini",
    description: "A selection of 45 page sections that fit perfectly in any combination",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Page Headers",
        count: 10,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/content-sections.jpg`,
        name: "Content Sections",
        count: 8,
        pro: true,
      },
    ],
  },
  {
    title: "Daily Activities",
    description: "50+ elements that you need for text manipulation and insertion",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        name: "Newsletters",
        count: 6,
        pro: true,
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        name: "Contact Sections",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        name: "Forms",
        count: 3,
        route: "/sections/input-areas/forms",
      },
      {
        image: `${imagesPrefix}/inputs.jpg`,
        name: "Inputs",
        count: 6,
        route: "/sections/input-areas/inputs",
      },
    ],
  },
];
