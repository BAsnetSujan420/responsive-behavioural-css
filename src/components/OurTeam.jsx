import styled, { createGlobalStyle } from 'styled-components';
import { ProfileCard } from './ProfileCard';

const GlobalStyle = createGlobalStyle`
  :root{
    --bg: #0b0f14;
    --card: #fff;
    --border: #e7e9ef;
    --text: #0b1220;
    --muted: #6b7280;
    --primary: #1d2bff;
    --primaryHover: #1620c9;
    --btnBorder: #c9ceda;
    --radius: 18px;
    --radiusSm: 12px;
    --shadow: 0 18px 40px rgba(0,0,0,0.35);
  }

   body{
    color: var(--text);
  }
`;

const Page = styled.main`
  padding: 32px 18px 48px;
  display: grid;
  place-items: center;
`;

const Cards = styled.section`
  width: min(1500px, 100%);
  display: flex;
  flex-wrap: wrap;
  gap: 22px;

  & > * {
    flex: 1 1 320px;
    max-width: 640px;
  }
`;

export default function OurTeam() {
  const data = [
    {
      id: '1',
      name: 'Hari Raya',
      handle: '@hraya',
      avatarBg: '#f3b3d0',
      location: 'Suryabinayak, Bhaktapur',
      role: 'Senior QA Engineer',
      joined: 'Aug 17, 2023',
      posts: 213,
    },
    {
      id: '2',
      name: 'Sujan Basnet',
      handle: '@basnet420',
      avatarBg: '#bfeec2',
      location: 'Budhanilkantha, Kathmandu',
      role: 'Software Engineer',
      joined: 'Apr 24, 2023',
      posts: 421,
    },
    {
      id: '3',
      name: 'Gagan Pandey',
      handle: '@gPandey',
      avatarBg: '#a6eef0',
      location: 'Chabahil, Kathmandu',
      role: 'Software QA Engineer',
      joined: 'Aug 17, 2021',
      posts: 2133,
    },
    {
      id: '4',
      name: 'Daniel Nguyen',
      handle: '@ExpertCoder99',
      avatarBg: '#f3b3d0',
      location: 'Buenos Aires, AR',
      role: 'Director of Engineering',
      joined: 'Jan 17, 2019',
      posts: 59003,
    },
    {
      id: '5',
      name: 'Amanda Maharjan',
      handle: '@AmanM',
      avatarBg: '#f5f7a2',
      location: 'Boston, USA',
      role: 'Senior Software Engineer',
      joined: 'Aug 1, 2020',
      posts: 21303,
    },
    {
      id: '6',
      name: 'Nitesh Bhattarai',
      handle: '@nbh30',
      avatarBg: '#3bdff3',
      location: 'Gaurighat, Kathmandu',
      role: 'Software QA Engineer',
      joined: 'Oct 6, 2023',
      posts: 3001,
    },
    {
      id: '7',
      name: 'RamKrishna Swami',
      handle: '@swami',
      avatarBg: '#f0f0f0',
      location: 'New Delhi, India',
      role: 'Freelancer',
      joined: 'Aug 17, 2025',
      posts: 123,
    },
  ];

  return (
    <>
      <GlobalStyle />
      <Page>
        <Cards>
          {data.map((p) => (
            <ProfileCard key={p.id} profile={p} />
          ))}
        </Cards>
      </Page>
    </>
  );
}
