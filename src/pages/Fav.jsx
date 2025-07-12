// src/pages/Fav.jsx
import React, { useEffect, useState } from 'react';
import api from '@/api/axios';
import ServiceCard from '@/components/common/ServiceCard';

const Fav = () => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    try {
      const res = await api.get('/api/users/favourites');
      setFavorites(res.data || []);
    } catch (error) {
      console.error('Failed to load favorites:', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await api.post('/api/users/favourites/remove', { postId: id });
      setFavorites((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Failed to remove from favorites:', error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div className="container mx-auto px-3 mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {favorites.map((course) => (
        <ServiceCard
          key={course.id}
          service={{
            title: course.title,
            img: course.image || 'https://via.placeholder.com/300'
          }}
          fav={true}
          onRemove={() => handleRemove(course.id)}
        />
      ))}
    </div>
  );
};

export default Fav;
