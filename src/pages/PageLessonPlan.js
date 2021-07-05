import React from 'react'
import './Style.css'

function PageLessonPlan() {
    return (
        <div className="container">
            <div className="lesson_container">
                <div className="lesson_header ">
                    <i className="bi bi-caret-left-fill d-inline"></i>
                    <h4 className="d-inline">Videos</h4>    
                </div>
                           
                <div className="p-4 d-flex justify-content-center">
                    <input type="text" className="form-control" placeholder="Insert URL here" />
                </div>

                <div className="d-flex justify-content-center">
                    <h4>Or</h4>
                </div>
                <div className="p-4">
                <div className="card custome_card ">
                    <input type="file" id="file"  />
                    <label  for="file">Upload</label>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default PageLessonPlan
