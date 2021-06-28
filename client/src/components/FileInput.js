import React from 'react'

const FileInput = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="file">File</label>
                <input type="text" name="file" id="file" />
                <button type="submit">Browse</button>
            </form>
        </div>
    )
}

export default FileInput
