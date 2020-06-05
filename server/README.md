# Ecoleta - Backend

## Iniciando aplicação
```
npm install
npm run dev
```

## Endpoints

### Listar todos os pontos (GET)
```
URL: http://localhost:<PORT>/points

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



### Listar um ponto específico (GET)
```
URL: http://localhost:<PORT>/points

retorno: 
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
```

### Cadastrar ponto de coleta (POST)
```
URL: http://localhost:<PORT>/points

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
{
  "id": number,
  "image": string,
  "name": string,
  "email": string,
  "whatsapp": string,
  "latitude": number,
  "longitude": number,
  "city": string,
  "uf": string(2)
}
```
### Listar ponto específico (GET)
#### http://localhost:PORT/points/:id
```
Retorno 
{
  "point": {
    "id": number,
    "image": string,
    "name": string,
    "email": string,
    "whatsapp": string,
    "latitude": number,
    "longitude": number,
    "city": string,
    "uf": string(2),
    "image_url": string
  },
  "items": [
    { "title": string },
  ]
}
```


