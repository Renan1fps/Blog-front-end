import { useEffect, useState } from 'react'
import Code from '../../images/codificacao-da-web.png'
import { Header, ItemsNav, Container, Section, Card } from './style'
import { Link } from 'react-router-dom'
export default function Main(){
  const [title, setTitle] = useState([])
 
  function handleGetPosts(){
    const url = 'http://localhost:8080/posts'
    fetch(url).then(post => post.json()).then(post => setTitle(post))
  }

  useEffect(()=>{
    handleGetPosts()
  },[])

  return(
    <Container>
      <Header>
          <img src={Code} alt="código"/>
      <h2>Renan Oliveira</h2>
      <nav>
        <ItemsNav>
          <li><h3><Link to= "/about">About</Link></h3></li>
          <li><h3><Link to= "/contact">Contact</Link></h3></li>
          <li><h3><Link to= "/projects">Projects</Link></h3></li>
        </ItemsNav>
      </nav>
      </Header>
      {title.map((post) =>{
            return(
              <Section key={post.id}>
                 <h1> {post.str_title}</h1>
                   <Card>
                      <p>
                        {post.str_body}
                     </p>
                  </Card>
            </Section>
            )
          })}
    </Container>
  )
}
