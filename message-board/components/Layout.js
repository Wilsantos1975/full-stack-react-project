import Nav from "./Nav"
  
function Layout({children}) {
  return (
    <div className="mx-6 md:max-w-2x1 md:mx-auto bg-red-50 font-poppins">
      <Nav/>
        <main>{children}</main>
    </div>
  )
}

export default Layout
