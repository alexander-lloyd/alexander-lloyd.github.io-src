
const styles = {
  list: {
    listStyle: 'none',
    verticalAlign: 'top',
    display: 'inline',
    height: '100px',
    padding: '10px'
  },
  socialIcon: {
    color: '#fff',
    marginTop: '10px'
  }
};

const Feature = ({contacts: c, ...props}) => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <div className="column is-6 is-offset-3">
        <h1 className="title">Alexander Lloyd</h1>
        <h2 className="subtitle">
          Just another blog. Coming Soon...
        </h2>
        <ul>
          {c.map(({cssClass: css, link: l}, i) => (
            <li style={styles.list} key={i} >
              <a href={l} style={styles.socialIcon}>
                <i className={css} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Feature;
