import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { List } from 'components/common/List';
import { getCastApi } from 'utils/getMoviesApi';
import { ActorsName, CastItem, Character } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    getCastApi(movieId).then(resp => setCast(resp.cast));
  }, [movieId]);
  if (!cast) return;

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <List>
      {cast.map(({ cast_id, profile_path, name, character }) => (
        <CastItem key={cast_id}>
          <img
            src={
              profile_path
                ? `${IMAGE_URL}${profile_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
            }
            alt={name}
            width={100}
            height={150}
            loading="lazy"
          />
          <ActorsName>{name}</ActorsName>
          <Character>Character: {character}</Character>
        </CastItem>
      ))}
    </List>
  );
};
