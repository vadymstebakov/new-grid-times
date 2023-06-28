import React from 'react';
import styled from 'styled-components/macro';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
    return (
        <Wrapper>
            <MainStorySection>
                <MainStory {...MAIN_STORY} />
            </MainStorySection>

            <SecondaryStorySection>
                <StoryListSecondaryStorySection>
                    {SECONDARY_STORIES.map((story, index) => (
                        <SecondaryStory key={story.id} {...story} />
                    ))}
                </StoryListSecondaryStorySection>
            </SecondaryStorySection>

            <OpinionSection>
                <SectionTitle>Opinion</SectionTitle>
                <StoryListOpinionSection>
                    {OPINION_STORIES.map((story, index) => (
                        <OpinionStory key={story.id} {...story} />
                    ))}
                </StoryListOpinionSection>
            </OpinionSection>

            <AdvertisementSection>
                <Advertisement />
            </AdvertisementSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        'main-story'
        'secondary-stories'
        'opinion-stories'
        'advertisement';
    gap: 48px;
    margin-bottom: 48px;

    @media ${QUERIES.tabletAndUp} {
        grid-template-areas:
            'main-story main-story secondary-stories'
            'advertisement advertisement advertisement'
            'opinion-stories opinion-stories opinion-stories';
        gap: 48px 16px;
    }

    @media ${QUERIES.laptopAndUp} {
        grid-template-areas:
            'main-story main-story secondary-stories opinion-stories'
            'main-story main-story advertisement advertisement';
        gap: 16px;
    }
`;

const MainStorySection = styled.section`
    grid-area: main-story;

    @media ${QUERIES.tabletAndUp} {
        padding-right: 16px;
        border-right: 1px solid var(--color-gray-300);
    }
`;

const SecondaryStorySection = styled.section`
    grid-area: secondary-stories;

    @media ${QUERIES.laptopAndUp} {
        padding-right: 16px;
        border-right: 1px solid var(--color-gray-300);
    }
`;

const StoryListSecondaryStorySection = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.gray[300]};
    gap: 1px 0;
`;

const StoryListOpinionSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.gray[300]};
    gap: 1px 0;

    @media ${QUERIES.tabletOnly} {
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
        background-color: transparent;
        gap: 32px;
    }
`;

const OpinionSection = styled.section`
    grid-area: opinion-stories;

    @media ${QUERIES.laptopAndUp} {
        margin-top: -8px;
    }
`;

const AdvertisementSection = styled.section`
    grid-area: advertisement;

    @media ${QUERIES.laptopAndUp} {
        padding-top: 16px;
        border-top: 1px solid var(--color-gray-300);
    }
`;

export default MainStoryGrid;
