import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const Navbar = () => {
  return (
    <div style={{ background: '#333', color: 'white', padding: '10px 20px', textAlign: 'center' }}>
      <h1>튜레이브 : 유튜브 컨텐츠 큐레이팅 서비스</h1>
    </div>
  );
};

const CourseCard = ({
  title,
  description,
  imageSrc,
  tags
}: {
  title: string,
  description: string,
  imageSrc: string,
  tags: string[]
}) => {
  return (
    <div style={{ padding: '20px', margin: '10px', width: '300px', borderRadius: '12px' }}>
      <img src={imageSrc} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div style={{ marginTop: '10px' }}>
        {tags.map(tag => (
          <span key={tag} style={{ marginRight: '5px', padding: '5px', backgroundColor: '#eee', borderRadius: '5px' }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const courses = [
    { title: 'Adobe Firefly', description: 'AI 시대, 그래픽을 사로잡는 방법...', imageSrc: 'path/to/image1.jpg', tags: ['AI', '그래픽'] },
    { title: 'ChatGPT for Business', description: 'Business Analytics 2기', imageSrc: 'path/to/image2.jpg', tags: ['AI', '기업', '비즈니스'] },
    // 추가 코스 정보를 여기에 넣으세요
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {courses.map(course => <CourseCard key={course.title} {...course} />)}
    </div>
  );
};

export default App;