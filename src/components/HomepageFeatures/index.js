import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Explorer',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Keşfetmek için arayüz.
      </>
    ),
    link: 'https://explorer.coco-node.com/', // Explorer için bağlantı
  },
  {
    title: 'Services',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Servislerinizi yönetin.
      </>
    ),
    link: '/services', // Services için bağlantı
  },
  {
    title: 'Introductions',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Başlangıç rehberi.
      </>
    ),
    link: '/introductions', // Introductions için bağlantı
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          {/* Görsele link ekleme */}
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          {/* Başlığa link ekleme */}
          <a href={link}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
