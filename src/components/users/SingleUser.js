import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faTimesCircle,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

export default class SingleUser extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const { loading } = this.props;

    const {
      name,
      login,
      avatar_url,
      html_url,
      company,
      blog,
      location,
      bio,
      public_repos,
      public_gists,
      followers,
      following,
      hireable,
    } = this.props.user;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className={'btn btn-dark'}>
          <span style={{ display: 'inlineBlock', paddingRight: '5px' }}>
            Back to Search
          </span>
          <FontAwesomeIcon icon={faSearch} style={{ display: 'inlineBlock' }} />
        </Link>
        Hireable:{' '}
        {hireable ? (
          <FontAwesomeIcon icon={faCheck} className={'text-success'} />
        ) : (
          <FontAwesomeIcon icon={faTimesCircle} className={'text-danger'} />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className={'round-img'}
              style={{ width: '150px' }}
              alt=''
            />
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className={`btn btn-dark my-1`}>
              Visit my Github profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">Public repos: {public_repos}</div>
            <div className="badge badge-dark">Public gists: {public_gists}</div>
        </div>
      </Fragment>
    );
  }
}
