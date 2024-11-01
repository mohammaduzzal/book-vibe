import { rankings } from 'match-sorter';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const {bookId} = useParams()
    const id = parseInt(bookId)

    // console.log(id);
    const data = useLoaderData()
    console.log(data);
    const book = data.find(book => book.bookId === id)
    // console.log(book);
    const {yearOfPublishing,publisher,tags,category,totalPages,review,image,author,bookName,rating} = book
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="py-6">
       By : {author}
      </p>
      <div className='border-t-2 mt-2 mb-2'></div>
      <p className='text-xl text-gray-400'>{category}</p>
      <div className='border-t-2 mt-2 mb-2'></div>
      <p className='text-gray-500'><span className='text-sm font-bold text-black'>Review : </span> {review}</p>
      <div className='flex justify-start gap-4 mt-2 mb-2'>
        <span className='text-gray-700 font-semibold'>Tag : </span>
        {
            tags.map((tag,idx) => <button key={idx} className="btn btn-xs text-green-500">{tag}</button>)
        }
    </div>


      <div className='border-t-2 mt-2 mb-4'></div>
      <div className='text-gray-500 space-y-2'>
      <p>Number of Pages:  <span className='text-black ml-5'> {totalPages}</span></p>
      <p>Publisher:  <span className='text-black ml-5'> {publisher}</span></p>
      <p>Year of Publishing:  <span className='text-black ml-5'> {yearOfPublishing}</span></p>
      <p>Rating:  <span className='text-black ml-5'> {rating}</span></p>
      </div>

      <div className='space-x-3 mt-5 mb-5'>
      <button className="btn btn-accent btn-outline text-white">Read</button>
      <button className="btn btn-accent text-white">Wishlist</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default BookDetails;