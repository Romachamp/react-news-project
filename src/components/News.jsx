import React, {useEffect, useState} from "react";
import SyncIcon from "@mui/icons-material/Sync";
import axios from "axios";
import "../css/news.css";
import "../css/posts.css";
import Post from "./Post";

function News() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loading = document.querySelector(".loading");
        const posts = document.querySelector('.posts');

        async function loadPosts() {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();
            let fullDate;
            if (Number(day) > 9) {
                fullDate = year + "-0" + month + "-" + day;
            } else {
                fullDate = year + "-0" + month + "-0" + day;
            }
            let response = [];

            try {
                const request = await axios.get(
                    `https://newsapi.org/v2/everything?qInTitle=Ukraine&from=${fullDate}&sortBy=publishedAt&apiKey=363858d3a88f49ffad9b467282270c8a`
                );

                const data = request.data.articles;

                if (data) {
                    for (let i = 0; i < 20; i++) {
                        response.push({
                            source: {
                                name: data[i].source.name,
                                url: data[i].url,
                            },

                            content: {
                                title: data[i].title,
                                text: data[i].content,
                            },
                        });
                    }

                    setPosts(response);
                }
            } catch (err) {
                console.log(`Error: ${err}`);
                posts.innerHTML = 'No available news'
                posts.classList.add('error');
            }

            loading.classList.add("none");
        }

        loadPosts();
    });

    return (
        <section className="news-container">
            <div className="news-posts">
                <div className="loading">
                    <SyncIcon />
                </div>
                <div className="posts">
                    {posts.map( (post) => (
                        <Post
                            name={post.source.name}
                            url={post.source.url}
                            text={post.content.text}
                            title={post.content.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default News;