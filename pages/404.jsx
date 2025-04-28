const PageNotFound = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center dark:text-offwhite">
      <h1 className="text-4xl">Oops!</h1>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <span>404</span>
        <span>|</span>
        <p className="font-exo">
          Sorry, the page you're looking for can't be found.
        </p>
      </div>
    </section>
  )
}

export default PageNotFound
