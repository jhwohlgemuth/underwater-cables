import React from 'react';
import PropTypes from 'prop-types';

const links = {
    tomo: 'https://github.com/jhwohlgemuth/tomo-cli',
    tylermorganwall: 'https://twitter.com/tylermorganwall',
    twitter: 'https://twitter.com/tylermorganwall/status/1440669533157556227'
};
const Footer = ({name}) => <footer>
    <p>Animation created by <a href={links.tylermorganwall}>Tyler Morgan-Wall</a>, available on <a href={links.twitter}>Twitter</a></p>
    <p>{name} was created with <span className="heart">❤</span> using <a href={links.tomo}>tomo</a></p>
</footer>;

Footer.propTypes = {
    name: PropTypes.string
};

export default Footer;
