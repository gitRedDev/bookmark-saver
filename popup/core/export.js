import { downloadObjectAsJson } from "../../util/index.js"

const exportBookmarks = () => {
    chrome.bookmarks.getTree((tree) => {
        const root = tree[0]
        downloadObjectAsJson(readBookmarkNode(root), 'bookmarks')
    })
}

const readBookmarkNode = (node) => {
    
    let bookmark = {}
    bookmark.id = node.id
    bookmark.title = node.title
    bookmark.url = node.url
    bookmark.index = node.index
    if(node.children !== undefined) 
        bookmark.children = node.children.map(child => readBookmarkNode(child))
    return bookmark
}



export {
    exportBookmarks
}