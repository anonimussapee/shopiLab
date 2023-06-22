import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
import { ContextSignIn } from '../../Context/ContextSignIn'

function Home() {


  const context = useContext(ShoppingCartContext);

  const contextUser = useContext(ContextSignIn);

  const renderView = () => {
    if(contextUser.userLogin === true){

       if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div>We don't have anything :(</div>
        )
      }

    }
   
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <form onSubmit={e=>e.preventDefault()}>
        <input
        type="text"
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' name='searchProd'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
      </form>
      
      <div className='grid ss:grid-cols-1 xs:grid-cols-2 xs:gap-0 sm:grid-cols-3 sm:gap-2 lg:gap-4 lg:grid-cols-4 w-full m-auto h-auto max-w-screen-lg justify-items-center'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )

  
}

export default Home