import React from 'react'

const FileInput = () => {
    return (
        <div className="container">
            <form action="" className="form">
                <label htmlFor="file">File</label>
                <input type="file" name="file" id="file" className="file-input" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FileInput
