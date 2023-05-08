import { exportBookmarks } from "./core/export.js"
import { importBookmarks } from "./core/import.js"

const exportBtn = document.getElementById("export-btn")
const bookmarkFileInput = document.getElementById("bookmark-file-input")

exportBtn.addEventListener("click", () => {
    
   exportBookmarks()
})

bookmarkFileInput.addEventListener("change", (e) => {
    
    importBookmarks(e.target.files[0])
 })
 




