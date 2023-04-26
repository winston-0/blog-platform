import CustomError from "../customError/customError";

  const  basicUrl = 'https://blog.kata.academy/api/';
    
  export const getArticles = async (page) => {
        const url = new URL(basicUrl + 'articles')
        const offset = (page - 1) * 10
        url.searchParams.append('limit', 10)
        url.searchParams.append('offset', offset)
        const request = await fetch(url)
        const result = await request.json();
        return result
    }
  export const getSignleArticle = async (id) => {
        const url = new URL(basicUrl + 'articles/' + id)
        const request = await fetch(url)
        const result = await request.json();
        return result
    }

  export const registerUser = async (body) => {
        const request = await fetch(basicUrl + 'users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body
        })
        if(!request.ok) {
          const body = await request.json();
          throw new CustomError(body.errors)
        }
        const result = await request.json();
        localStorage.setItem('token', result.user.token)
        return result.user
}
  export const reloginUser = async () => {
        const token = localStorage.getItem('token');
        const request = await fetch(basicUrl + 'user', {
          headers: {
            Authorization: `Token ${token}`
          },
          method: 'get',
          accept: 'application/json',
        })
        const result = await request.json();
        return result.user
  }
  export const loginUser = async (body) => {
    const request = await fetch(basicUrl + 'users/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body
    })
    if(!request.ok) {
      throw new Error()
    }
    const result = await request.json()
    localStorage.setItem('token', result.user.token)
    return result.user
}

  export const updateUser = async (body) => {
    const token = localStorage.getItem('token');
    const request = await fetch(basicUrl + 'user', {
      method: 'put',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json;charset=utf-8'
      },
      body
    })
    if(!request.ok) {
      const body = await request.json();
      throw new CustomError(body.errors)
    }
    const result = await request.json();
    console.log(result)
    return result.user
  }

  export const createArticle = async (body) => {
    const token = localStorage.getItem('token');
    const request = await fetch(basicUrl + 'articles', {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json;charset=utf-8'        
      },
      method: 'post',
      body
    })
    const result = await request.json();
    return result
  }

