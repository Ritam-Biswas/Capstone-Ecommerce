import Categories from "../../Components/Categories/categories.component";

const categories = [
    {
      id: 1,
      item : 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      route:'/shop/hats'
    },
    {
      id: 2,
      item : 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      route:'/shop/jackets'
    },
    {
      id: 3,
      item : 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      route:'/shop/sneakers'
    },
    {
      id: 4,
      item : 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      route:'/shop/womens'
    },
    {
      id: 5,
      item : 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      route:'/shop/mens'
    },
  ]

const Home = () => {
    return(
        <Categories categories={categories}/>
    )
}

export default Home;

  
  