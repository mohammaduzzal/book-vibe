import { json } from "react-router-dom"
import { toast } from "react-toastify"

const getStoredReadList = () =>{
    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr){
    const storedList = JSON.parse(storedListStr)
    return storedList

    }
    else{
        return []
    }

}


const addToStoredReadList = (id) =>{
    const storedList = getStoredReadList()
    if(storedList.includes(id)){
        toast('already exist the book');
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListStr)
        // dont declare toast in db
        toast('this book added to your read list')
    }

}

// wished list
const getStoredWishedList = () =>{
    const storedListStr = localStorage.getItem('wished-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else{
        return []
    }

}

const addToStoredWishedList = (id) =>{
    const storedList = getStoredWishedList()
    if(storedList.includes(id)){
        toast('already exist book');
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wished-list', storedListStr)
        // dont declare toast in db
        toast('this book added to your wish list')

    }
}

export { addToStoredReadList, addToStoredWishedList,getStoredReadList,getStoredWishedList }