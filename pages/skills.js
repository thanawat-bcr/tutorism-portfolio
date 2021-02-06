import { Fragment } from 'react';
import utils from '../styles/utils';
import General from '../components/layouts/general';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import useWindowSize from '../components/size';

const Skills = (props) => {
  const size = useWindowSize();
  const skills = [
    {
      title: {
        head: 'Frontend',
        body: 'Developer',
      },
      icons: [
        { title: 'HTML', icon: 'html5' },
        { title: 'CSS', icon: 'css3-alt' },
        { title: 'Java Scipt', icon: 'js-square' },
        { title: 'Vue.js', icon: 'vuejs' },
        { title: 'React', icon: 'react' },
        { title: 'Next.js', icon: null, path: 'nextjs' },
      ],
    },
    {
      title: {
        head: 'Backend',
        body: 'Developer',
      },
      icons: [
        { title: 'Node JS', icon: 'node-js' },
        { title: 'Express', icon: 'js' },
      ],
    },
    {
      title: {
        head: 'Mobile',
        body: 'Developer',
      },
      icons: [
        { title: 'Dart', icon: null, path: 'dart' },
        { title: 'Flutter', icon: null, path: 'flutter' },
      ],
    },
    {
      title: {
        head: 'Tool',
        body: '& Utilities',
      },
      icons: [
        { title: 'Github', icon: 'github-square' },
        { title: 'VS Code', icon: null, path: 'vscode' },
        { title: 'Figma', icon: 'figma' },
        { title: 'Photoshop', icon: null, path: 'photoshop' },
        { title: 'Illustrator', icon: null, path: 'illustrator' },
      ],
    },
  ];
  return (
    <Fragment>
      <General>
        <div className='flex justify-between'>
          <div
            className={`flex flex-col justify-center ${
              size.width > 768 ? 'w-45' : 'w-full'
            }`}
          >
            <div className='font-bold text-header text-secondary my-4'>
              My <span className='text-contrast'>Skills</span>
            </div>
            <div
              className={`text-lg font-light ${
                size.width > 768 ? 'my-4' : 'my-2'
              } `}
              style={{ textIndent: '3rem', textAlign: 'justify' }}
            >
              My main area of expertises are frontend development and mobile
              development.
            </div>
            <div
              className={`text-lg font-light ${
                size.width > 768 ? 'my-4' : 'my-2'
              } `}
              style={{ textIndent: '3rem', textAlign: 'justify' }}
            >
              {' '}
              HTML, CSS, Javascipt, building small and medium web apps with
              Vue.js and React + pure CSS. In addition, for mobile development
              with Dart and Flutter. Furthermore, I also work in backend
              development and database system.
            </div>
            <div
              className={`text-lg font-light ${
                size.width > 768 ? 'my-4' : 'my-2'
              } `}
              style={{ textIndent: '3rem', textAlign: 'justify' }}
            >
              {' '}
              You can visit my Github for more details and feel free to contact
              me.
            </div>
          </div>
          {size.width > 768 ? (
            <div className='flex flex-col' style={{ width: '45%' }}>
              {skills.map((s, i) => (
                <div className='my-4' key={i}>
                  <div className='text-body font-thick text-secondary'>
                    <span className='text-contrast'>{s.title.head}</span>{' '}
                    {s.title.body}
                  </div>
                  <div className='flex'>
                    {s.icons.map((i, index) => (
                      <div className=' flex flex-col items-center' key={index}>
                        <div className='icon-size pointer'>
                          {i.icon ? (
                            <FontAwesomeIcon icon={['fab', i.icon]} />
                          ) : (
                            <Image
                              src={`/icons/${i.path}.png`}
                              alt='me'
                              width='64'
                              height='64'
                            />
                          )}
                        </div>

                        <div className='text-sm font-thin text-secondary'>
                          {i.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </General>
      <style jsx>{utils}</style>
      <style jsx>{`
        .icon-size {
          width: 2.125rem;
          height: 2.125rem;
          margin: 1rem 1.5rem;
        }
        .w-45 {
          width: 45%;
        }
      `}</style>
    </Fragment>
  );
};

export default Skills;
