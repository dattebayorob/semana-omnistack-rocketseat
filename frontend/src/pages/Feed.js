import React,{useState, useEffect} from 'react'
import io from 'socket.io-client'
import api from '../services/api'
import './Feed.css'
import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

export function Feed(){

    const [feed, setFeed] = useState([])

    useEffect(() =>  {
        async function getPosts(){
            const response = await api.get('posts')
            setFeed(response.data)
        }
        getPosts()
    }, [])

    function registerToSocket(){
        const socket = io('http://localhost:3001')

        socket.on('post', newPost=> {
            setFeed([newPost, ...feed])
        })
        socket.on('like', liked => {
            setFeed(feed.map(post => post._id === liked._id ? liked : post))
        })
    }


    function onLike(id){
        api.post(`/posts/${id}/like`)
    }

    return (
        <section id="post-list">
        {registerToSocket()}
            {feed.map(post => (
                 <article key={post._id}>
                    <header>
                        <div className="user-info">
                            <span>{post.author}</span>
                            <span className="place">{post.place}</span>
                        </div>

                        <img src={more} alt="more" />
                    </header>
                    <img src={`http://localhost:3001/files/${post.image}`} alt="img" />
                    <footer>
                        <div className="actions">
                            <button type="button" onClick={() => onLike(post._id)}>
                                <img src={like} alt="like" />
                            </button>
                            <img src={comment} alt="comment" />
                            <img src={send} alt="send" />
                        </div>
                        <strong>{post.likes} curtidas</strong>
                        <p>
                            {post.description}
                            <span>{post.hashtags}</span>
                        </p>
                    </footer>
                </article>
            ))}
    </section>

    )

}
export default Feed