import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { connect } from 'react-redux';

import PageHeader from '../00-components/01-molecules/page-header/page-header';
import CardGallery from '../00-components/01-molecules/card-gallery/card-gallery';

const galleryArr = [
  {
    href: '/gallery/0',
    image: '/images/head-1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  },
  {
    href: '/gallery/1',
    image: '/images/raivis',
    title: 'Consequuntur dolore doloremque dolores enim eum',
  },
  {
    href: '/gallery/2',
    image: '/images/raivis',
    title: 'Possimus quas tempora velit voluptatem',
  },
  {
    href: '/gallery/3',
    image: '/images/head-1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  },
];

class Gallery extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
  };

  render() {
    const { id } = this.props;

    return (
      <Fragment>
        {id}
        <PageHeader
          className="margin-bottom-50"
          heading="Galerija"
        />
        <div className="container">
          <div className="width-100 margin-bottom-30">
            <div className="row row--gutters-20">
              {galleryArr && map(galleryArr, ({
                href,
                image,
                title,
                text,
              }, i) => (
                <div key={i} className="col-s1-24 col-s3-12 col-s5-8 col-s6-6">
                  <CardGallery
                    className="margin-bottom-20"
                    href={href}
                    image={image}
                    title={title}
                    text={text}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapState = ({ location: { payload: { id } } }) => ({
  id,
});

export default connect(mapState)(Gallery);
