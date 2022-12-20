import { ToastContainer } from 'react-toastify';
import { SearchBar } from 'components/SearchBar/SearchBar';

export const Movies = () => {
  return (
    <main>
      <SearchBar />
      <ToastContainer autoClose={3000} position="top-center" theme="dark" />
    </main>
  );
};
