import { InfoSection } from './InformationSection/InformationSection';
import { Portfolio } from './Portfolio/Portfolio';
import { Contacts } from './Contacts/Contacts';
import { SearchBar } from '../SearchBar/SearchBar';
import { VideoSection } from '../Common/VideoSection';
import { PolygonSection } from '../Common/PolygonSection';
import { BlogEntries } from '../Blog/BlogEntries';
import { useEffect, useState } from 'react';

const Newletters = {
  title: 'We are here to help you?',
  subtitle: 'Subscribe to get our newsletters',
  path: '/',
  btnMsg: 'Subscribe Newletters',
};

const baseUrl = 'http://localhost:3030/data/topic';


export const LandingPage = () => {


  const [initialBlogEntry, setInitialBlogEntry] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}?_createdOn%20desc`)
      .then((res) => res.json())
      .then((result) => {
        console.log(Object.values(result)[0]);
        setInitialBlogEntry(Object.values(result)[0]);
      });
  }, []);

  return (
    <div>
      <SearchBar />
      <PolygonSection {...Newletters} />
      <InfoSection />
      <Portfolio />
      <VideoSection />
      <BlogEntries blog={initialBlogEntry} />
      <Contacts />
    </div>
  );
};
