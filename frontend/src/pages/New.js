import React, { useState } from 'react';
import api from '../services/api';
import './New.css';

const INITIAL_FORM = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: ''
}

export function New(props){

    const [ form, setForm ] = useState(INITIAL_FORM)

    async function onSubmit(e){
        e.preventDefault()
        const data = new FormData()
        data.append('image', form.image)
        data.append('author', form.author)
        data.append('place', form.place)
        data.append('description', form.description)
        data.append('hashtags', form.hashtags)

        await api.post('posts', data)

        props.history.push('/')
    }

    function onChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function onImageChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.files[0]
        })
    }

    return (
        <form id="new-post" onSubmit={ (e) => onSubmit(e) }>
            <input type="file"
                name="image"
                onChange={ (e) => onImageChange(e) } />

            <input type="text" 
                name="author"
                value={form.author}
                placeholder="Post's author" 
                onChange={ (e) => onChange(e) }/>
            <input type="text" 
                name="place"
                value={form.place}
                placeholder="Post's place" 
                onChange={ (e)=> onChange(e) }/>
            <input type="text"
                name="description"
                value={form.description}
                placeholder="Post's description" 
                onChange={ (e)=> onChange(e) }/>
            <input type="text"
                name="hashtags"
                value={form.hashtags}
                placeholder="Post's Hashtags" 
                onChange={ (e)=> onChange(e) }/>

            <button type="submit">Send</button>
        </form>
    )

}
export default New
