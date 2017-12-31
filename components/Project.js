import React from 'react';

const styles = {
  gradient: {
    background: 'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)',
    backgroundSize: '400% 400%',
    animation: 'Gradient 15s ease infinite'
  }
};

const Project = ({title: t, desc: d, pictureUrl: p, links, ...props}) => (
  <div className="hero-body" style={styles.gradient}>
    <div className="container has-text-vcentered">
      <div className="columns is-vcentered">
        <div className="column is-5">
          <figure className="image is-1by1">
            <img src={ p } alt="Description" />
          </figure>
        </div>
        <div className="column is-6 is-offset-1">
          <h1 className="title is-2">
            { t }
          </h1>
          <h2 className="subtitle is-4">
            { d }
          </h2>
          <br />
          <div className="columns is-vcentered is-mobile">
            {links.map((l) => (
              <div className="column">
                <a className="button is-medium is-info is-outlined" href={l.url}>
                  { l.name }
                </a>
              </div>
            ))}
          </div>
          {/*<p className="has-text-centered">*/}
            {/*<a className="button is-medium is-info is-outlined">*/}
              {/*Learn more*/}
            {/*</a>*/}
          {/*</p>*/}
        </div>
      </div>
    </div>
  </div>
);


export default Project;
