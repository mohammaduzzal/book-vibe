
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookName,author,image,tags,category,bookId} = book
    return (
        <Link to={`books/${bookId}`}>
        <div className="card bg-base-100  shadow-xl p-6">
  <figure className='bg-slate-100 py-8 rounded-2xl'>
    <img
      src={image}
      className='h-[166px]'
      alt={bookName} />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-4'>
        {
            tags.map((tag,idx) => <button key={idx} className="btn btn-xs text-green-500">{tag}</button>)
        }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By : {author}</p>
    <div className='border-t-2 border-dashed mt-2 mb-2'></div>
    <div className="card-actions justify-between items-center">
      <div className="badge badge-outline">{category}</div>
      <div className="">
      <div className="rating">
      <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-200" />
</div>
</div>
      </div>
    </div>
  </div>
</div>
</Link>
    );
};

Book.propTypes = {
    
};

export default Book;