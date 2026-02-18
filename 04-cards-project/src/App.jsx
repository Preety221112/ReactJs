

import Card from './components/card.jsx'



const App = () => {
 
  const jobOpenings = [
  {
    brandLogo: "data:image/webp;base64,UklGRswDAABXRUJQVlA4IMADAABwGACdASqqALQAPp1OpEylpKOiI/MIaLATiWdu4XKRBz4yQXNnoA2zfOqejPeRfQA6Y7Ij0868Lfxl0PhfMvSWMz7w4SQ46k5O6GmfR5qd2GmfR5qd2GmfR1DD2HKv1dYCGmfQ3WPX4GRhu4cmoloz6yh4Hksari0yHnD6PKtIZCec1aRiSIPBWLHrxZr9C7G+iuzVwWfyujRgrbzl4wDNhxhrMYpz0LrjqctZh3WFWzc94SiexPXR5qd2GmfR5qd2GmfR5qd2GmfR5OAA/v4DT/KY6Lyoaozc8dzCYIsxOonClwQFNkDCNICt54VZzi6kGs8QfZxUu0NZM1sfAyKcceIUxGAEI4Q9hneWYPobGbLUp+XZGx1lWRnScKksOt7zl7TNeAEKMQ5OWqLDHVbgOmRZrQF09oCVinySA209uQW7jGHgczB8jnvDaXzZA/nAR6oj/mFB/loxS9fJrnTRINNb7s8jxzWeYSVbrx3idVAZcxtuv54HOHxq/41jpo4fE7lurk4FYH+niQii0CHfu0ueJrWxy5I3TPTItTKOchZKkonlGuJWasA6/cE60sXUCVmMC5vWMn2OStitSfIatrNeDhKMFkkyIDl9QS3x62S+q0MeaSwsai+A3vZl+kSonsZOEB+xSo0r/Tgej6xkTTAXjg4pdDSLbLMbVZ39D/XPIi1wxfmNkLMIp42qZBlun/YD0JgoY0QhWQk7+kSIYzemGe8XB9aPNajV+fQXsO0hIcW4SiObqc3uXmTZ90KkuQ3d3pt+Z30nNAcXHpdKnGbnzyGw9KqYojni3d9iHTZn756djY/3bNicTQ3MF6N6wPb8ollIy97TBE4K9zmx5Bo6DdL89DSbvx5XUnh9tHYUS8gQOAUoosuztAtoguFNuu5+DcnEUCzf83ska4j4htJaL77dv+SdWJBPXVn8FwamL8ndeRXvYsAWCHV0Q4kyv6PzO3jeGpEa3hFcFJ93nSma+ZcOlHqMkPzgoLMzMmzn+e4Q2vcPjKmSiXREEWG46CcHrsnZQ1E4K/fLs05nNePs9CJtdcadNLRNNwyjJEKbDKv8ovFLtFo/rZwm6V8seYsxdvLFWejtZzWm6BXJrM2zCM96sVpVfx5CzmWAOgSK50TY4Bvpa1VFzmnZBEdHQox4MHsorIf0Ux0c8etbqOyil3mvHvt9PKxeoo0VgnstJzsKxdhj3RAvmHUMgbhXygQS33ZIPtTIRzNMgweAgkfkr2ESLUpHe5Q8FGmnKpwuwzMzjraCNygAAAAAAAA=",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?w=161&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.AuggztWv8Hwzt2zjbJcztAHaEK?w=317&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "SDE I",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "data:image/webp;base64,UklGRj4DAABXRUJQVlA4IDIDAABQGgCdASrkALQAPp1OpEylpKOiJHPYGLATiWlu4W8hFzN78V/3ftG/z9efvoygeBGkCmSeMr6U9gzou/tv7I364CPknZOydk7J2TsnZOydk7J2S/u91MlfZ9wRpoGUMBD9BFoRElL+J/SolsjDGGMJsucv/7iQ2yRQntwvJ0S7SIF2VTZOyYJqG48HxkM6X9QxhjCdAadrrPG2qT6nDSF2TBsCGYOHEYGy5As3Q5cS4l7P3qCFrxT/ei8azhWitq5+0/QMYYwyuGYl0cBAuydk7J2TsnZOydk7JeAA/v4s4AG2bGloc0r+P/RXEJjELUS4pZmIhHo2IM6/DPTXdZG+IdmyKns3zMSe0mv3HnHlfGlsZetDnJ/DJYvYAOUX1vAFOl43x74+amMKwwsuJzwRUF4yZX+HknrVan2dN1NSEgdvjhWl8GTb5Ris+yeGFy6x1nJWqZHfPk4iUoQBHFq9BUWdrdfbdq28LVgzooR1tjfachIH4qD61J1eSbgBafOH2TuSy8sRtZaU8SXQD9+OjsygkpMefQWcq2wVnfhF6YM9tIZrPGJSNBJPl2hTbUj7Zk3+HwwKcpYCSMpI0k9YQfix5t0yldPYBXW8x7VSd7Y4/DFGn2m84y64Xd/cZdRme5dyphOXA6Q86UdoWLdDC5ucrehX6F90v3s1v0F2wopxedZD8RXQKODlrqDIwIXPhQwfJSTpfFMjNxL8RQr13uCwVESOXMT1770dU+/RcKjtWFEw9HCM6dXJpi6B1Ru45ynZpS08DpLHCpbhTdKW7wCtYz1HZ18ymqXhvYaR1mcWoAyGXuLfseBwk5wZ6ZRJWsq1YKxt7ewfTMm5H7LxAJqr7IZBjn8VuwIP6yplgNAwfQ0v04ecW54WL/z8D2wXaKEr/BJ3/R71ginGCQHDqSgAFuli2R8WRVEKKpJABb56MKDOr9gRrXk629p98Svq94lZhJH99rfMxqqiZk9GtPevia0CBKHIj45eaza7SK9fw9XV08z1zhz8exgp/KA7zeRqUjfeFv1wWN+qmsCRBRo735aZqzuy84aiS6mwrRVashAGoZcu/gMOencAAAAAAA==",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.Agrkom8o3NK-HTeZ9F1sIwHaHa?w=154&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.uHrDUCEbFVxRTdSSRjC5_gHaCu?w=310&h=128&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "data:image/webp;base64,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",
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.Oy5wfKuZ37KcuXONE7zjnQHaEK?w=292&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.g0lawDojoi8ucTBxwKOQegHaEK?w=317&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "Airbnb",
    datePosted: "10 weeks ago",
    post: "Web Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.4qvNqZjuif1EnZ7SLfXM6QHaEK?w=293&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "NVIDIA",
    datePosted: "12 days ago",
    post: "Software Engineer – UI",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  }
];

  console.log(jobOpenings);
  return (
  <div className='parent'>
    {jobOpenings.map(function(elem){

      return <Card company={elem.companyName}  datePosted={elem.datePosted} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2}/>
    }) }
     
  </div>
  )
}

export default App
