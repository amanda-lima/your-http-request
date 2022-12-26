export const httpCodes = [
    {
      "id": "1",
      "type": "informative",
      "error": {
        "code": "100",
        "title": "Continue",
        "message": "Essa resposta provisória indica que tudo ocorreu bem até agora e que o cliente deve continuar com a requisição ou ignorar se já concluiu o que gostaria."
      }
    },
    {
      "id": "2",
      "type": "success",
      "error": {
        "code": "200",
        "title": "OK",
        "message": "Indica que a requisição foi bem-sucedida e que a resposta contém o resultado da solicitação."
      }
    },
    {
      "id": "3",
      "type": "redirection",
      "error": {
        "code": "300",
        "title": "Multiple Choices",
        "message": "Indica que há múltiplas opções para o recurso que o cliente pode seguir. Isso pode ocorrer quando o servidor oferece conteúdo em vários formatos ou idiomas."
      }
    },
    {
      "id": "4",
      "type": "client error",
      "error": {
        "code": "400",
        "title": "Bad Request",
        "message": "Indica que a requisição não pôde ser entendida pelo servidor devido a sintaxe inválida."
      }
    },
    {
      "id": "5",
      "type": "client error",
      "error": {
        "code": "401",
        "title": "Unauthorized",
        "message": "Indica que o recurso requer autenticação e que o cliente não forneceu as credenciais necessárias ou as credenciais são inválidas."
      }
    },
    {
      "id": "6",
      "type": "client error",
      "error": {
        "code": "402",
        "title": "Payment Required",
        "message": "Reservado para uso futuro. A intenção é que esse código indique que o cliente precisa pagar para acessar o recurso."
      }
    },
    {
      "id": "7",
      "type": "client error",
      "error": {
        "code": "403",
        "title": "Forbidden",
        "message": "Indica que o cliente não tem permissão para acessar o recurso."
      }
    },
    {
      "id": "8",
      "type": "client error",
      "error": {
        "code": "404",
        "title": "Not Found",
        "message": "Indica que o recurso solicitado não foi encontrado no servidor."
      }
    },
    {
      "id": "9",
      "type": "client error",
      "error": {
        "code": "405",
        "title": "Method Not Allowed",
        "message": "Indica que o método de solicitação não é permitido para o recurso solicitado."
      }
    },
    {
      "id": "10",
      "type": "client error",
      "error": {
        "code": "406",
        "title": "Not Acceptable",
        "message": "Indica que o servidor não pode produzir uma resposta compatível com os cabeçalhos de aceitação do cliente."
      }
    },
    {
      "id": "11",
      "type": "client error",
      "error": {
        "code": "407",
        "title": "Proxy Authentication Required",
        "message": "Indica que o cliente precisa autenticar-se com o proxy."
      }
    },
    {
      "id": "12",
      "type": "client error",
      "error": {
        "code": "408",
        "title": "Request Timeout",
        "message": "Indica que o tempo limite para processar a solicitação do cliente expirou antes que a solicitação pudesse ser concluída."
      }
    },
    {
      "id": "21",
      "type": "client error",
      "error": {
        "code": "417",
        "title": "Expectation Failed",
        "message": "Indica que o servidor não atendeu a uma exigência de 'Expect' do cabeçalho da solicitação."
      }
    },
    {
      "id": "22",
      "type": "server error",
      "error": {
        "code": "500",
        "title": "Internal Server Error",
        "message": "Indica que ocorreu um erro no servidor enquanto ele tentava processar a solicitação."
      }
    },
    {
      "id": "23",
      "type": "server error",
      "error": {
        "code": "501",
        "title": "Not Implemented",
        "message": "Indica que o servidor não suporta a funcionalidade necessária para cumprir a solicitação."
      }
    },
    {
      "id": "24",
      "type": "server error",
      "error": {
        "code": "502",
        "title": "Bad Gateway",
        "message": "Indica que o servidor atuando como gateway ou proxy recebeu uma resposta inválida do servidor de origem enquanto tentava processar a solicitação."
      }
    },
    {
      "id": "25",
      "type": "server error",
      "error": {
        "code": "503",
        "title": "Service Unavailable",
        "message": "Indica que o servidor está temporariamente indisponível, geralmente devido a manutenção ou superação de capacidade."
      }
    },
    {
      "id": "26",
      "type": "server error",
      "error": {
        "code": "504",
        "title": "Gateway Timeout",
        "message": "Indica que o servidor atuando como gateway ou proxy não recebeu uma resposta a tempo do servidor de origem."
      }
    },
    {
      "id": "27",
      "type": "server error",
      "error": {
        "code": "505",
        "title": "HTTP Version Not Supported",
        "message": "Indica que o servidor não suporta ou não quer suportar a versão do protocolo HTTP usada na solicitação."
      }
    },
    {
      "id": "28",
      "type": "server error",
      "error": {
        "code": "506",
        "title": "Variant Also Negotiates",
        "message": "Indica que o servidor está configurado para enviar o cabeçalho 'Vary' conforme o recurso solicitado."
      }
    },
    {
      "id": "29",
      "type": "server error",
      "error": {
        "code": "507",
        "title": "Insufficient Storage",
        "message": "Indica que o servidor não tem espaço suficiente para cumprir a solicitação."
      }
    },
    {
      "id": "30",
      "type": "server error",
      "error": {
        "code": "508",
        "title": "Loop Detected",
        "message": "Indica que o servidor detectou um loop infinito ao processar a solicitação."
      }
    },
    {
      "id": "31",
      "type": "server error",
      "error": {
        "code": "510",
        "title": "Not Extended",
        "message": "Indica que o servidor não atendeu a todos os requisitos para a extensão solicitada."
      }
    },
    {
      "id": "32",
      "type": "server error",
      "error": {
        "code": "511",
        "title": "Network Authentication Required",
        "message": "Indica que o cliente precisa autenticar-se para obter acesso à rede."
      }
    }
  ]
