import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
  filter: drop-shadow(var(--shadow));
`;

const Inner = styled.div`
  background: var(--card);
  border-radius: var(--radius);
  padding: 22px 22px 18px;
  box-shadow: 0 0 0 1px var(--border) inset;
  border: 2px solid rgba(255, 255, 255, 0.35);
  container-type: inline-size;
`;

const Header = styled.header`
  display: grid;
  gap: 14px;
  justify-items: center;
  text-align: center;
  padding-bottom: 12px;

  @container (min-width: 26rem) {
    grid-template-columns: auto 1fr;
    align-items: initial;
    justify-items: revert;
    text-align: left;
    gap: 1.5rem;
    margin-bottom: -2rem;
  }
`;

const Avatar = styled.div`
  width: 78px;
  height: 78px;
  border-radius: 999px;
  background: ${(p) => p.$bg};
  display: grid;
  place-items: center;
  border: 3px solid rgba(0, 0, 0, 0.08);

  span {
    font-weight: 800;
    letter-spacing: 0.02em;
    opacity: 0.7;
  }

  @container (min-width: 26rem) {
    width: 120px;
    height: 120px;
    transform: translateY(-40px);

    span {
      letter-spacing: 0.02em;
      opacity: 0.7;
      font-size: 2.2rem;
    }
  }
`;

const Title = styled.div`
  min-width: 0;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 24px;
  line-height: 1.15;
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @container (min-width: 26rem) {
    font-size: 1.8rem;
  }
`;

const Handle = styled.p`
  margin: 6px 0 0;
  color: var(--muted);
  font-style: italic;
  font-size: 18px;
  @container (min-width: 26rem) {
    font-size: 1.4rem;
  }
`;

const Meta = styled.div`
  display: grid;
  gap: 10px;
  padding: 12px 2px 18px;

  grid-template-columns: 1fr;

  @container (min-width: 26rem) {
    grid-template-columns: 1fr 1fr;
    column-gap: 18px;
    row-gap: 12px;
  }
`;

const MetaItem = styled.div`
  display: grid;
  grid-template-columns: 22px 1fr;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;

const MetaItemWideOnly = styled(MetaItem)`
  display: none;

  @container (min-width: 26rem) {
    display: grid;
  }
`;

const Icon = styled.span`
  width: 22px;
  height: 22px;
  display: inline-grid;
  place-items: center;

  svg {
    width: 20px;
    height: 20px;
    opacity: 0.75;
  }
`;

const MetaText = styled.p`
  margin: 0;
  font-size: 18px;
  color: #1b2330;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Actions = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;

  @container (min-width: 26rem) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BtnBase = styled.button`
  appearance: none;
  border: 2px solid transparent;
  border-radius: var(--radiusSm);
  padding: 12px 14px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition:
    transform 140ms ease,
    background 140ms ease,
    border-color 140ms ease;

  &:active {
    transform: translateY(1px);
  }
  &:focus-visible {
    outline: 3px solid rgba(29, 43, 255, 0.25);
    outline-offset: 2px;
  }
`;

const BtnSecondary = styled(BtnBase)`
  background: #fff;
  border-color: var(--btnBorder);
  color: #384152;

  &:hover {
    border-color: #aeb6c8;
  }
`;

const BtnPrimary = styled(BtnBase)`
  background: var(--primary);
  color: #fff;

  &:hover {
    background: var(--primaryHover);
  }
`;

export function ProfileCard({ profile }) {
  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join('');

  return (
    <Card>
      <Inner>
        <Header>
          <Avatar $bg={profile.avatarBg} aria-hidden="true">
            <span>{initials}</span>
          </Avatar>
          <Title>
            <Name>{profile.name}</Name>
            <Handle>{profile.handle}</Handle>
          </Title>
        </Header>

        <Meta>
          <MetaItem>
            <Icon aria-hidden="true">
              <GlobeIcon />
            </Icon>
            <MetaText>{profile.location}</MetaText>
          </MetaItem>

          <MetaItem>
            <Icon aria-hidden="true">
              <BriefcaseIcon />
            </Icon>
            <MetaText>{profile.role}</MetaText>
          </MetaItem>

          {profile.joined && (
            <MetaItemWideOnly>
              <Icon aria-hidden="true">
                <CalendarIcon />
              </Icon>
              <MetaText>{profile.joined}</MetaText>
            </MetaItemWideOnly>
          )}

          {typeof profile.posts === 'number' && (
            <MetaItemWideOnly>
              <Icon aria-hidden="true">
                <HashIcon />
              </Icon>
              <MetaText>{profile.posts} Posts</MetaText>
            </MetaItemWideOnly>
          )}
        </Meta>

        <Actions>
          <BtnSecondary type="button">Follow</BtnSecondary>
          <BtnPrimary type="button">Message</BtnPrimary>
        </Actions>
      </Inner>
    </Card>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M2 12h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 2c3 2.8 5 6.7 5 10s-2 7.2-5 10c-3-2.8-5-6.7-5-10s2-7.2 5-10Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M2 12h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3v3M16 3v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 6h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 10h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10 3 8 21M16 3l-2 18M5 8h16M4 16h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
