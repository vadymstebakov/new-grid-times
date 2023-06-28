import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const SecondaryStory = ({ id, title, image, location, abstract }) => {
    return (
        <Link href={`/story/${id}`}>
            <Wrapper>
                <Image alt={image.alt} src={image.src} />
                <Heading>{title}</Heading>
                <Abstract>{abstract}</Abstract>
            </Wrapper>
        </Link>
    );
};

const Link = styled.a`
    background-color: var(--color-gray-100);

    &:not(:first-child) {
        padding-top: 1rem;
    }

    &:not(:last-child) {
        padding-bottom: 1rem;
    }

    @media ${QUERIES.laptopAndUp} {
        max-width: 385px;
    }
`;

const Wrapper = styled.article`
    display: grid;
    grid-template-areas:
        'image heading'
        'image abstract';
    gap: 4px 16px;
    grid-template-columns: 120px 1fr;
    color: var(--color-gray-900);

    @media ${QUERIES.tabletOnly} {
        grid-template-areas:
            'image'
            'heading'
            'abstract';
        gap: revert;
        grid-template-columns: revert;
    }
`;

const Image = styled.img`
    grid-area: image;
    display: block;
    width: 100%;
    height: 120px;
    border-radius: 4px;
    object-fit: cover;

    @media ${QUERIES.tabletOnly} {
        margin-bottom: 1rem;
    }
`;

const Heading = styled.h2`
    grid-area: heading;
    font-size: 1.125rem;
    font-weight: var(--font-weight-bold);
    line-height: 1.3;
    /* Optical alignment */
    margin-top: -2px;
`;

const Abstract = styled.p`
    align-self: start;
    grid-area: abstract;
    font-size: 1rem;
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export default SecondaryStory;
