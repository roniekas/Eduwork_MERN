import React from "react";
import Box from "@mui/material/Box";
import Post from "./Post";
import "./load.css";
import axios from "axios";


class Feed extends React.Component{
    constructor(props){
        super(props);
        this.updateUniv = this.updateUniv.bind(this);
    } 
    state = {
        news: [],
        bar: false,
        a: ''
    }

    componentDidMount(){
        this.updateUniv();
    }

    componentDidUpdate(prevProps) {
        if(this.props.inputan !== prevProps.inputan)
        {
          this.updateUniv();
        }
    }
    
    updateUniv() {
        if (this.props.inputan) {
            axios.get(`https://newsapi.org/v2/everything?q=${this.props.inputan}&apiKey=1c8bd8bb95014e1db7353ef96160d9aa`)
            .then((res) => {
                this.setState({
                    news: res.data.articles,
                    bar: true
                });
            })
            .catch(function (error) {
                console.error(error);
            })
        } else {
            axios.get(`https://newsapi.org/v2/everything?q=reactjs&apiKey=1c8bd8bb95014e1db7353ef96160d9aa`)
            .then((res) => {
                this.setState({
                    news: res.data.articles,
                    bar: true
                });
                console.log(res.data.articles)
            })
            .catch(function (error) {
                console.error(error);
            })
        }  
      }

    render(){
        return (
            <Box flex={4} p={2}>
                {
                
                !this.state.bar ? (
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    this.state.news.map((news, i) => {
                        return <Post 
                        key={i} 
                        author={news.author} 
                        title={news.title}
                        description={news.description}
                        url={news.url}
                        urlToImage={news.urlToImage}
                        publishedAt={news.publishedAt}/>
                    })
                )
            }                
            {console.log('ini dari feed : ' + this.props.inputan)}
            </Box>
        )
    }
}

export default Feed;