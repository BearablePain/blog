export interface MyPost {
  userId: number | string
  id: number | string
  title: string
  body: string
}

export interface MyUsers {
  id: number | string
  name: string
  username: string
  email: string
}


export interface PostPageProps {
  posts: any[]
}

