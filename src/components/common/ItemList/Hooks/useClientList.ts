// import { useState, useRef, useEffect } from 'react';
// import { API } from '@/app/apis/api';

// export const usePostList = () => {
//   const [clients, setPosts] = useState<any[]>([]);
//   const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const clientsRef = useRef<(HTMLElement | null)[]>([]);

//   const fetchPosts = async () => {
//     try {
//       const fetchedPosts = await API.getAllPosts();
//       setPosts(fetchedPosts);
//       setFilteredPosts(fetchedPosts);
//       setLoading(false);
//     } catch (err) {
//       setError('Failed to fetch clients. Please try again later.');
//       console.log(err);
//       setLoading(false);
//     }
//   };

//     const fetchPaginatedPosts = async (totalPages, currentPage) => {
//       try {
//         const fetchedPosts = await PostsAPI.paginatedResults(totalPages, currentPage);
//         setPosts(fetchedPosts);
//         setFilteredPosts(fetchedPosts);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch clients. Please try again later.');
//         console.log(err);
//         setLoading(false);
//       }
//     };

//   const handleSearch = (searchTerm: string) => {
//     setSearchTerm(searchTerm);
//     const filtered = clients.filter((client) =>
//       client.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredPosts(filtered);
//     announceToScreenReader(`Found ${filtered.length} clients`);
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return {
//     clients,
//     filteredPosts,
//     loading,
//     error,
//     searchTerm,
//     clientsRef,
//     handleDelete,
//     handleSearch,
//     fetchPosts,
//   };
// };
