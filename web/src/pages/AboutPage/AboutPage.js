import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p>Hello I'm Ryan and this is my first Redwood JS project!</p>
    </>
  )
}

export default AboutPage
