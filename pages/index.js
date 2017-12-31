import React from 'react';

import Feature from '../components/Feature';
import Project from '../components/Project';

/**
 *
 * TODO: https://codepen.io/Deadlymuffin/pen/hGiqo/?editors=1100#0 Button gradients
 */

const projects = [
  {
    title: "Carrotron2",
    desc : "Library for simplify robotic development with Arduino. Developed at HackTheMidlands 2017 Edit",
    pictureUrl: "/static/projects/Carrotron.jpg",
    links: [
      {name: 'GitHub', url: "https://github.com/alexander-lloyd/Carrotron2"}
    ]
  },
];

const contacts = [
  {name: 'GitHub', cssClass: 'fa fa-github fa-2x', link: 'https://github.com/alexander-lloyd/'},
  {name: 'LinkedIn', cssClass: 'fa fa-linkedin-square fa-2x', link: 'https://linkedin.com/in/alexander-lloyd/'}
];

export default () => (
  <div>
    <section className="hero is-info is-fullheight">
      <Feature contacts={contacts} />
    </section>
    <section className="hero is-info is-fullheight">
      {
        projects.map(({title, desc, pictureUrl, links, ...p}) =>
          (
            <Project title={title} desc={desc} pictureUrl={pictureUrl} links={links} />
          )
        )
      }
    </section>
  </div>
);
