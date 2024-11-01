import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishedList } from '../../Utility/AddToDB';
import Book from '../Book/Book';

const ListedBook = () => {
    const allBooks = useLoaderData()
    const [readBook, setReadBook] = useState([])
    const [addWished, setAddWished] = useState([])

    useEffect(()=>{
        const storedReadList = getStoredReadList()
        const storedWishedList = getStoredWishedList()

        // str to number id (read book)
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadBook(readBookList)

        // str to number id (wish list)
        const storedWishListInt = storedWishedList.map(id => parseInt(id))
        const addedWishList = allBooks.filter(book => storedWishListInt.includes(book.bookId))
        setAddWished(addedWishList)




    },[])
console.log(allBooks);

    return (
        <div>
              <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>book i Read : {readBook.length}</h2>
      {
        readBook.map(book => <Book key={book.bookId} book={book}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>my wish list : {addWished.length}</h2>
      {
        addWished.map(book => <Book key={book.bookId} book={book}></Book>)
      }
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBook;