import React from 'react';
import './ClassCard.css'; // 스타일을 위한 CSS 파일

interface Tag {
  id: number;
  attributes: {
    Tags: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
}

interface ClassCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  isPublished: boolean;
  tags: string[]; // 태그 타입을 string[]로 변경
}

const ClassCard: React.FC<ClassCardProps> = ({ title, description, imageUrl, url, isPublished, tags }) => {
  if (!isPublished) return null;

  // 설명을 줄여서 반환하는 함수
  const truncateDescription = (desc: string) => {
    if (desc.length <= 20) return desc;
    const words = desc.split(' ');
    let truncated = '';
    for (let word of words) {
      if ((truncated.length + word.length + 1) > 60) break;
      truncated += word + ' ';
    }
    return truncated.trim() + '...';
  };

  return (
    <div className="class-card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="class-image" />
      </a>
      <div className="class-content">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2 className="class-title">{title}</h2>
        </a>
        <p className="class-description">{truncateDescription(description)}</p>
        <div className="class-tags">
          {tags.map(tag => (
            <span key={tag} className="class-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;