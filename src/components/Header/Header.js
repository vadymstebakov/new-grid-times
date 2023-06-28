import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, COLORS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
    return (
        <HeaderWrap>
            <SuperHeader>
                <Row>
                    <ActionGroup>
                        <button>
                            <Search size={24} />
                        </button>
                        <button>
                            <Menu size={24} />
                        </button>
                    </ActionGroup>
                    <ActionGroup>
                        <UserButton>
                            <User size={24} />
                        </UserButton>
                        <SubscribeWrap>
                            <Button>Subscribe</Button>
                            <SubscribeLink href="#">Already a subscriber?</SubscribeLink>
                        </SubscribeWrap>
                    </ActionGroup>
                </Row>
            </SuperHeader>
            <MainHeader>
                <Logo />
            </MainHeader>
        </HeaderWrap>
    );
};

const HeaderWrap = styled.header`
    @media ${QUERIES.laptopAndUp} {
        position: relative;
    }
`;

const SuperHeader = styled.div`
    padding: 16px 0;
    background: var(--color-gray-900);
    color: ${COLORS.white};

    @media ${QUERIES.laptopAndUp} {
        background: transparent;
        color: ${COLORS.offblack};
        padding: 52px 0;
        margin-bottom: 30px;
    }
`;

const Row = styled(MaxWidthWrapper)`
    display: flex;
    justify-content: space-between;
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 24px;

    /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
    svg {
        display: block;
    }
`;

const UserButton = styled.button`
    @media ${QUERIES.laptopAndUp} {
        display: none;
    }
`;

const SubscribeWrap = styled.div`
    display: none;

    @media ${QUERIES.laptopAndUp} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const SubscribeLink = styled.a`
    color: ${COLORS.gray[900]};
    font-size: 0.875rem;
    font-style: italic;
    line-height: 1.375rem;
    text-decoration-line: underline;
    margin-top: 0.5rem;
`;

const MainHeader = styled(MaxWidthWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;

    @media ${QUERIES.tabletAndUp} {
        margin-bottom: 72px;
    }

    @media ${QUERIES.laptopAndUp} {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export default Header;
