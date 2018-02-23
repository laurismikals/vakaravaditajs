import React from 'react';
import { map } from 'lodash';

import PageHeader from '../01-molecules/page-header/page-header';
import CardArticle from '../01-molecules/card-article/card-article';

const articleArr = [
  {
    href: '/',
    image: '/images/head-1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    text: 'Ipsum dolor sit amet, consectetur adipisicing elit. Eius, nesciunt',
  },
  {
    href: '/',
    image: '/images/raivis',
    title: 'Consequuntur dolore doloremque dolores enim eum',
    text: 'Dicta dolore doloribus dolorum et eum ex exercitationem explicabo hic illum in itaque minus necessitatibus nisi perferendis perspiciatis',
  },
  {
    href: '/',
    image: '/images/raivis',
    title: 'Possimus quas tempora velit voluptatem',
    text: 'Dolorum et eum ex exercitationem explicabo hic illum in itaque minus',
  },
  {
    href: '/',
    image: '/images/head-1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    text: 'Assumenda commodi est, ex laboriosam officiis quaerat quidem reprehenderit sed velit voluptas',
  },
];

export default () => (
  <div>
    <PageHeader
      className="margin-bottom-50"
    />
    <div className="width-100">
      <div className="container container--text">
        {articleArr && map(articleArr, ({
          href,
          image,
          title,
          text,
        }, i) => (
          <CardArticle
            key={i}
            className="margin-bottom-50"
            href={href}
            image={image}
            title={title}
            text={text}
          />
        ))}
      </div>
    </div>
  </div>
);
