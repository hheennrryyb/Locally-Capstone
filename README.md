This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Locally E-commerce
https://locally-capstone.vercel.app/

Locally is my NextJS Ecommerce website centered around giving local boutique handcraft makers an accessible B2C platform. This project was a part of my final capstone project for my time at Brain station. The website is a feature-packed with e-commerce cart and checkout functionality, many dynamic routes and a beautiful UI. The project was a big undertaking considering the short time span I had and the functionality I had to develop for an MVP. Although I gained so much knowledge about new technologies, the app was also fulfilling to create because of the social responsibility and sustainability behind the project. **(2 Weeks to Develop)**

![Locally](https://user-images.githubusercontent.com/79873814/203249507-2596df34-a533-4ccf-851f-588cb1b8c062.gif)

Tech stack:
-   Next JS - was a vital framework and was the best option for developing an ecommerce platform like this.
  
	-   An intuitive dynamic routes and page-based routing, building dynamic filebase routing for product, makers and categories pages.
	    
	-   Pre-rendering, server-side rendering (SSR) are supported for fast load times and improved SEO
	    
	-   Automatic code splitting for faster page loads.
	    
	-   Client-side routing with optimized prefetching.
	    
	-   API routes to build API endpoints with Serverless Functions.
    
    

-   Sanity CMS - was handling all the content on the website without the need for a complex backend. Data were queried using GROQ and using Next function getServerSideProps pre-render the page on each request. Sanity rich text, image handling, and content management were crucial in having a content-heavy website work.
    
-   UseContextAPI - Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
    
-   Tailwind - was amazing to use to create an elegant UI
    
-   Stripe Payments SDK - Handling safe payments and checkout experiences.
    
-   Auth0 - Centralize and manage users from multiple identity providers and give them branded, seamless signup and login experiences.
    
-   Google Maps API
    

