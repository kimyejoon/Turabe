import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ClassCard from '../components/ClassCard';
import './HomePage.css';

interface Video {
  id: number;
  attributes: {
    title: string;
    Description: string;
    Thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    isPublished: boolean;
    url: string;
    tags: {
      data: {
        attributes: {
          name: string;
        };
      }[];
    };
  };
}

const HomePage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]); // 여기서 videos를 빈 배열로 초기화

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await api.get('/videos-plural?populate=*'); // "videos" 엔드포인트 사용
        console.log(response.data); // 응답 데이터 확인
        setVideos(response.data.data); // Strapi의 응답 구조에 따라 데이터 접근
      } catch (error) {
        console.error('Error fetching videos', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <div className="class-list">
        {videos && videos.map(video => {
          const tagsArray = video.attributes.tags.data.map(tag => tag.attributes.name);

          return (
            <ClassCard
              key={video.id}
              title={video.attributes.title}
              description={video.attributes.Description}
              imageUrl={video.attributes.Thumbnail ? `http://localhost:1337${video.attributes.Thumbnail.data.attributes.url}` : ''}
              url={video.attributes.url}
              isPublished={video.attributes.isPublished}
              tags={tagsArray}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;