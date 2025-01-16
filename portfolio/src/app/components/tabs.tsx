"use client"
import { useEffect, useState } from 'react';

export default function Tabs() {
  const tabs = [
    { name: 'SKILLS', content: '♡ Python \n ♡ Java \n ♡ Next.js \n ♡ TypeScript \n ♡ Springboot \n ♡ Tailwind \n ♡ SQLite \n ♡ GitHub \n ♡ Figma \n ♡ Agile' },
    { name: 'EDUCATION', content: '♡ Here is my education...' },
    { name: 'CERTIFICATES', content: '♡ Here are my certificates...' },
  ];

  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (tabs.some(tab => tab.name === hash)) {
      setActiveTab(hash);
    } else {
      setActiveTab(tabs[0].name);
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (tabs.some(tab => tab.name === hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab(tabs[0].name);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleTabClick = (tabName: string) => {
    window.location.hash = tabName;
  };

  return (
    <section>
      <div className="text-small text-center text-white">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <li key={tab.name} className="me-2">
              <a
                href={`#${tab.name}`}
                onClick={() => handleTabClick(tab.name)}
                className={`inline-block p-4 ${
                  activeTab === tab.name
                    ? 'text-pink border-pink'
                    : 'border-transparent hover:text-pink'
                } border-b-2 rounded-t-lg`}
                aria-current={activeTab === tab.name ? 'page' : undefined}
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-white text-small mb-8 z-20">
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name}>
                {tab.content.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            )
        )}
      </div>
    </section>
  );
}

