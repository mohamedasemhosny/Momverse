// src/components/CourseList.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '@/api/axios';
import { getPostById } from '@/api/postsService';

// Simple modal for text courses
const TextModal = ({ text, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center overflow-auto">
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white rounded-lg p-6 max-w-[50%] max-h-[80%] overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4">Course Details</h3>
      <div className="mb-4 whitespace-pre-wrap">{text}</div>
      <button
        onClick={onClose}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Close
      </button>
    </div>
  </div>
);

TextModal.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

// Main course list with API fetch and grouped posts
const CourseList = ({ page = 1, limit = 10 }) => {
  const [groupedCourses, setGroupedCourses] = useState({});
  const [modalText, setModalText] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get('/api/posts', {
          params: { page, limit, category: 'Courses' }
        });
        setGroupedCourses(res.data.groupedPosts || {});
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [page, limit]);

  const handleItemClick = async (course) => {
    if (course.url) {
      window.open(course.url, '_blank', 'noopener');
    } else {
      try {
        const res = await api.get(`/api/posts/${course.id}`);
        console.log('Course detail response:', res.data);
        const fullCourse = res.data;
        setModalText(fullCourse.content || 'No content available.');
      } catch (err) {
        setModalText('Failed to load course content.');
      }
    }
  };

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;

  return (
    <div className="space-y-8">
      {Object.entries(groupedCourses).map(([group, courses]) => (
        <div key={group}>
          <h2 className="text-2xl font-bold mb-4 text-white text-center">{group}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div
                key={course.id}
                onClick={() => handleItemClick(course)}
                className="cursor-pointer bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
              >
                <img
                  src={course.image || 'https://via.placeholder.com/300'}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-black bg-opacity-50 flex items-center justify-between">
  <h3 className="text-lg font-semibold text-white text-center w-full">
    {course.title}
  </h3>
<button
  onClick={(e) => {
    e.stopPropagation();
    api.post('/api/users/favourites/add', { postId: course.id })
      .then(() => console.log('Added to favorites'))
      .catch(console.error);
  }}
  className="ml-4 text-white hover:text-red-400"
  title="Add to Favorites"
>
  ♥
</button>
</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {modalText && (
        <TextModal
          text={modalText}
          onClose={() => setModalText(null)}
        />
      )}
    </div>
  );
};

CourseList.propTypes = {
  page: PropTypes.number,
  limit: PropTypes.number,
};

export default CourseList;
