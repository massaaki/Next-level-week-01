# Ecoleta - Backend

## Iniciando aplicação
```
npm install
npm run dev
```

## Endpoints

### Listar todos os pontos filtrados (GET)
```
URL: http://localhost:<port>/points

retorno: 
[
  {
    "id": number,
    "image": string,
    "name": string,
    "email": string,
    "whatsapp": string,
    "latitude": number,
    "longitude": string,
    "city": string,
    "uf": string,
    "image_url": string
  }
]
```

### Cadastrar ponto de coleta (POST)
```
URL: http://localhost:<port>/points

Request (Multipart)
  name: string
  email: string
  whatsapp: string
  latitude: number
  longitude: number
  city: string
  uf: string(2)
  item: string

Retorno 




```

