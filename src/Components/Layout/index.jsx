const Layout = ({ children }) => {
  return (
    <div className='flex flex-col items-center xs:mt-28  md:mt-20 ss:mt-48'>
      {children}
    </div>
  )
}

export default Layout