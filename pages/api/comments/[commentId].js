import { comments } from "../../../data/comments"
export default function handler(req, res) {
    const { commentId } = req.query

    if (req.method === 'GET') {
        const comment = comments.find((comment) => comment.id === parseInt(commentId))
        res.status(200).json(comment)
    } else if (req.method === 'DELETE') {
        const deletedComment = comments.find((comment) => comment.id === parseInt(commentId))
        const index = comments.findIndex((comment) => comment.id === parseInt(commentId))

        comments.splice(index, 1)
        res.status(200).json(deletedComment)
    }
    else if (req.method === 'PATCH') {
        // const indexComment = comments.findIndex((comment) => comment.id === parseInt(commentId))
        // const updateComment = req.body.updateComment

        // comments.map((comment, i) => {
        //     console.log(i)
        //     if (i + 1 === indexComment) {
        //         comment.text = updateComment;
        //     }
        // })
        // comments.push(...comments)
        // res.status(201).json(updateComment)
    }
}