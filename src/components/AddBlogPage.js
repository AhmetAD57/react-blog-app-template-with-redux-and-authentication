import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux';
import { addBlog, addBlogToDatabase } from '../actions/blogs';

import { useNavigate } from 'react-router-dom';

const AddBlogPAge = (props) => {
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>Add Blog</h1>
            {/* BlogForm daki onSubmit metotunun döndürdüğü değer (blog) değeri yerine geliyor. */}
            <BlogForm onSubmit = {(blog) => {
                props.dispatch(addBlogToDatabase(blog));
                //Başkabir sayfaya yönlendirme yapılıyor.
                navigate("/blogs");
            }}/>
        </div>
    )
}
//Redux bilgileri "props" ile metot a aktarılıyor
export default connect()(AddBlogPAge);
