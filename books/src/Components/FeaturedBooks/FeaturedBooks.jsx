import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context.jsx';
import coverImg from '../../images/cover_not_found.jpg';
import './FeaturedBooks.css';

const FeaturedBooks = () => {
  const { books, loading } = useGlobalContext();

  const featuredBooks = useMemo(
    () =>
      books.slice(0, 6).map((book) => ({
        ...book,
        id: book.id.replace('/works/', ''),
        cover_img: book.cover_id
          ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
          : coverImg,
      })),
    [books]
  );

  if (loading || featuredBooks.length === 0) {
    return null;
  }

  return (
    <section className='featured-books'>
      <div className='container'>
        <div className='section-title featured-title-row'>
          <div>
            <h2>Featured Books</h2>
            <p className='featured-subtitle'>
              Handpicked from your current search results for quick discovery.
            </p>
          </div>
          <Link to='/books' className='featured-see-all'>
            See all results
          </Link>
        </div>

        <div className='featured-grid'>
          {featuredBooks.map((book) => (
            <article key={book.id} className='featured-card'>
              <img src={book.cover_img} alt={book.title} className='featured-card-image' />
              <div className='featured-card-content'>
                <h3>{book.title}</h3>
                <p>{book.author ? book.author.join(', ') : 'Unknown author'}</p>
                <Link to={`/books/${book.id}`} className='featured-card-link'>
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
