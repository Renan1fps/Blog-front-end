import { useEffect, useState } from 'react'
import Code from '../../images/codificacao-da-web.png'
import Web from '../../images/desenvolvimento-web.png'
import Code from '../../images/codificacao-da-web.png'
import { Header, ItemsNav, Container, Section, Card } from './style'
export default function Main(){
  const [title, setTitle] = useState([])
  console.log(title)


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
      <img src={Web} alt="código"/>
      <img src={Code} alt="código"/>
      <h2>Renan Oliveira</h2>
      <nav>
        <ItemsNav>
          <li><h3>About</h3></li>
          <li><h3>Contact</h3></li>
          <li><h3>Projects</h3></li>
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
