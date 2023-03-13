import Generator from 'react-router-sitemap-generator';
import Router from './route'; //import your react router component

const generator = new Generator(
  'https://calculator.samwash.ua',
  Router,
  {
    lastmod: new Date().toISOString().slice(0, 10),
    changefreq: 'monthly',
    priority: 0.8,
  }
);
generator.save('public/sitemap.xml');

// require("babel-register")
//
// const Sitemap = require('react-router-sitemap').default;
// const router = require('./route').default;
//
// function generateSitemap() {
//
//   return (
//     new Sitemap(router)
//       .build("https://calculator.samwash.ua")
//       .save('./public/sitemap.xml')
//   );
// }
//
// generateSitemap();


// const fs = require('fs');
// const convert = require('xml-js');
// const fetch = require('node-fetch');
// const moment = require('moment');
// const hostBlogBaseURL = 'https://calculator.samwash.ua';
// // const getBlogsListURL  = 'https://jsonplaceholder.typicode.com/posts';
// const getBlogsListURL  = 'https://calculator.samwash.ua/';
// const untrackedUrlsList = [];
// const options = { compact: true, ignoreComment: true, spaces: 4 };
//
//
// const fetchBlogsList = () => {
//   fetch(getBlogsListURL)
//     .then(res => res.json())
//     .then(dataJSON => {
//       if (dataJSON) {
//         dataJSON.forEach(element => {
//           const modifiedURL = element.title.replace(/ /g, '-');
//           untrackedUrlsList.push(`${hostBlogBaseURL}/${modifiedURL}`);
//         });
//         filterUniqueURLs();
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
//
// const filterUniqueURLs = () => {
//   fs.readFile('sitemap.xml', (err, data) => {
//     if (data) {
//       const existingSitemapList = JSON.parse(convert.xml2json(data, options));
//       let existingSitemapURLStringList = [];
//       if (existingSitemapList.urlset && existingSitemapList.urlset.url && existingSitemapList.urlset.url.length) {
//         existingSitemapURLStringList = existingSitemapList.urlset.url.map(ele => ele.loc._text);
//       }
//
//       untrackedUrlsList.forEach(ele => {
//         if (existingSitemapURLStringList.indexOf(ele) == -1) {
//           existingSitemapList.urlset.url.push({
//             loc: {
//               _text: ele,
//             },
//             changefreq: {
//               _text: 'monthly'
//             },
//             priority: {
//               _text: 0.8
//             },
//             lastmod: {
//               _text: moment(new Date()).format('YYYY-MM-DD')
//             }
//           });
//         }
//       });
//       createSitemapFile(existingSitemapList);
//     }
//   });
// }
//
// const createSitemapFile = (list) => {
//   const finalXML = convert.json2xml(list, options); // to convert json text to xml text
//   saveNewSitemap(finalXML);
// }
//
// const saveNewSitemap = (xmltext) => {
//   fs.writeFile('sitemap.xml', xmltext, (err) => {
//     if (err) {
//       return console.log(err);
//     }
//
//     console.log("The file was saved!");
//   });
// }
//
// fetchBlogsList();