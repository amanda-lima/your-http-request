import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { httpCodes } from '../data/codes'
import { Input, Container, SearchResult, TextSearchResult, Button, Form } from '../styles/pages'

const Home: NextPage = () => {
  const [errorCode, setErrorCode] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function handleSearch(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault()

    const result = httpCodes.find(({ error }) => error.code === errorCode)
    setErrorMessage(result ? result.error.message : `Código de erro ${errorCode} não encontrado`)
  }

  return (
    <Container>
      <h1>Entenda o significado do código de resposta html</h1>
      <Form onSubmit={handleSearch} >
        <Input placeholder="Digite o código" type="text" inputMode='numeric' value={errorCode} onChange={event => setErrorCode(event.target.value)} />
        <Button>Enviar</Button>
      </Form>

      {errorMessage && (
        <SearchResult>
          <TextSearchResult>
            {errorMessage}
          </TextSearchResult>
        </SearchResult>
      )}

    </Container>
  )
}

export default Home
