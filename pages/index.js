import React from 'react';

import Feature from '../components/Feature';

/**
 *
 * TODO: https://codepen.io/Deadlymuffin/pen/hGiqo/?editors=1100#0 Button gradients
 */

const styles = {
  gradient: {
    background: 'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)',
    backgroundSize: '400% 400%',
    animation: 'Gradient 15s ease infinite'
  }
};

const projects = [
  {
    name:'Carrotron2',
    docs: '#',
    link: '#',
    image: ''
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
  </div>
)
//   <section className="section hero is-info is-fullheight" style={styles.gradient}>
//     {/*<div className="hero-body">*/}
//     {/*<div className="container">*/}
//     {/*{projects.map()}*/}
//
//
//     <div className="columns is-mobile">
//       <div className="column is-5 is-offset-one-quarter">
//         <h3 className="is-size-4">Carrotron2</h3>
//         <p>Description</p>
//         <a href="#">See Github</a>
//       </div>
//       <div className="column is-5">
//         <img src="file:///D:/OneDrive/New%20Documents/Projects/Carrotron2/Media/HackTheMidlandsCarrotronEdited.jpg" />
//       </div>
//       <div className="is-offset-one-quarter" />
//     </div>
//     {/*</div>*/}
//     {/*</div>*/}
//   </section>
// )
