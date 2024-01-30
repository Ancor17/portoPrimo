import React from 'react';

const PostItem = (props) => {

    return (
        <div>
            <div className = 'post'>
                <div className='post_content'></div>
                <strong>{props.post.id} {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
                <div className='post_btns'>
                    <button>УДАЛИТЬ</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;