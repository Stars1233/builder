'use client';
import React from 'react';
import { BuilderElement } from '@builder.io/sdk';
import { withBuilder } from '../../functions/with-builder';
import { IMAGE_FILE_TYPES } from 'src/constants/file-types.constant';
import { getSrcSet } from '../Image';

export interface ImgProps {
  attributes?: any;
  image?: string;
  builderBlock?: BuilderElement;
}

// TODO: srcset, alt text input, object size/position input, etc

class ImgComponent extends React.Component<ImgProps> {
  getSrcSet(): string | undefined {
    const url = this.props.image;
    if (!url || typeof url !== 'string') {
      return;
    }

    // We can auto add srcset for cdn.builder.io images
    if (!url.match(/builder\.io/)) {
      return;
    }

    return getSrcSet(url);
  }

  render() {
    const attributes = this.props.attributes || {};
    const srcset = this.getSrcSet();
    return (
      <img
        loading="lazy"
        {...this.props.attributes}
        src={this.props.image || attributes.src}
        srcSet={srcset}
      />
    );
  }
}

export const Img = withBuilder(ImgComponent, {
  // friendlyName?
  name: 'Raw:Img',
  hideFromInsertMenu: true,
  image:
    'https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-insert_photo-24px.svg?alt=media&token=4e5d0ef4-f5e8-4e57-b3a9-38d63a9b9dc4',
  inputs: [
    {
      name: 'image',
      bubble: true,
      type: 'file',
      allowedFileTypes: IMAGE_FILE_TYPES,
      required: true,
    },
  ],
  noWrap: true,
  static: true,
});
