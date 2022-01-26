import { useState } from 'react'

function CommentsPage() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const [updateComment, setUpdateComment] = useState('')


    // const updateCommentHandler = async (commentId) => {
    //     console.log(updateComment)
    //     const response = await fetch(`/api/comments/${commentId}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify({ updateComment }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const data = await response.json()
    //     console.log(data)
    // }

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }
    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`,
            {
                method: 'DELETE'
            })
        const data = await response.json()
        console.log(data)
        fetchComments()

    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }
    return (
        <>
            <input
                type='text'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={submitComment}>Submit comment</button>
            <br />
            <br />

            <button onClick={fetchComments}>Load Comments</button>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            {comment.id} {comment.text} <button onClick={() => { deleteComment(comment.id) }}>delete</button>

                            {/* <input
                                type='text'
                                value={updateComment}
                                onChange={(e) => setUpdateComment(e.target.value)}
                            />
                            <button onClick={() => { updateCommentHandler(comment.id) }}>Update comment</button>
                            <br />
                            <br /> */}
                        </div>
                    )
                })
            }
        </>
    )
}

export default CommentsPage