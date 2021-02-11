import { Fragment, useEffect } from 'react';
import utils from '../../styles/utils';
import useWindowSize from '../size';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { skills } from '../../assets/data/skills';
const List = (props) => {
  const isMobile = useWindowSize().width < 768;
  return (
    <Fragment>
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
      <style jsx>{utils}</style>
      <style jsx>{`
        .icon-size {
          width: 2.125rem;
          height: 2.125rem;
          margin: 1rem 1.5rem;
        }
      `}</style>
    </Fragment>
  );
};

export default List;
