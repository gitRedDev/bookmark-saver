const importBookmarks = (file) => {
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
        
        const bookmarkRoot = JSON.parse(reader.result)
        const favBarBookmarks = bookmarkRoot.children[0]
        const otherFavBookmarks = bookmarkRoot.children[1]

            
        favBarBookmarks.children.forEach(child => createBookmarkTree(child, favBarBookmarks.id))        
        otherFavBookmarks.children.forEach(child => createBookmarkTree(child, otherFavBookmarks.id))        

    }
   
}


const createBookmarkTree = (bookmarkNode, parentId) => {
    
    if(bookmarkNode.children !== undefined) {
        chrome.bookmarks.create({
            'parentId': parentId,
            'title': bookmarkNode.title,
            'index': bookmarkNode.index
        }, (node) => {
            
            bookmarkNode.children.forEach(child => createBookmarkTree(child, node.id))
        })    
    }

    else{
        chrome.bookmarks.create({
            'parentId': parentId,
            'title': bookmarkNode.title,
            'url': bookmarkNode.url,
            'index': bookmarkNode.index,
        })
    }

}







export { 
    importBookmarks
}