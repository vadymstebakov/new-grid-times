import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
    return (
        <Link href={`/story/${id}`}>
            <Wrapper>
                <div>
                    <AuthorName>{author}</AuthorName>
                    <ArticleTitle>{title}</ArticleTitle>
                </div>
                <Avatar alt="" src={avatar} />
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

    @media ${QUERIES.tabletOnly} {
        max-width: 170px;

        &:not(:first-child) {
            padding-top: 0;
        }

        &:not(:last-child) {
            padding-bottom: 0;
        }
    }

    @media ${QUERIES.laptopAndUp} {
        max-width: 273px;
    }
`;

const Wrapper = styled.article`
    color: var(--color-gray-900);
    display: grid;
    grid-template-columns: 1fr 48px;
    gap: 20px;

    @media ${QUERIES.tabletOnly} {
        grid-template-columns: revert;
        gap: 8px;
    }
`;

const Avatar = styled.img`
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;

    @media ${QUERIES.tabletOnly} {
        order: -1;
    }
`;

const AuthorName = styled.p`
    font-size: 1.125rem;
    font-weight: var(--font-weight-medium);
    color: var(--color-gray-700);
    margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: var(--font-weight-bold);
    line-height: 1.3;
`;

export default OpinionStory;
